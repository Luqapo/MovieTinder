const express = require('express');
const bodyParser = require('body-parser');

const Movie = require('../models/Movie');
const CrateMovieSchema = require('./createMovieSchema');
const MovieStatus = require('../models/MovieStatus');
const isAuth = require('../middelware/is-auth');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route('/movie')
    .post((req, res) => {
        CrateMovieSchema.validate(req.body, {abortEarly: false})
            .then(validatedMovie => {
                Movie.create(validatedMovie, (err, movie) => {
                    if(err) return res.status(500).send({ message: 'There was a problem crating movie.' })
                    res.status(200).send({ message: 'Movie created' });
                });
            })
            .catch(validationError => {
                const errorMessage = validationError.details.map( detail => detail.message);
                res.status(400).send({ message: errorMessage });
            })
        
    })
    .get((req, res) => {
        Movie.find((err, movies) => {
            if(err) return res.status(500).send({ message: 'Error on the server' });
            if(!movies) return res.status(404).send({ message: 'No movies found.' });
            res.status(200).json(movies);
        })
    })

router.route('/movie/status')
    .post((req, res) => {
        const statusToAdd = {
            movieId: req.body.movieId,
            userId: req.body.user._id,
            status: req.body.status
        }
        MovieStatus.create(statusToAdd, (err, movieSatus) => {
            if(err) return res.status(500).send({ message: 'There was a problem saving movie status.' })
            res.status(200).send({ message: 'Movie status saved.' });
        })
    })

    .get((req, res) => {
        MovieStatus.find({status: 'Accepted'}, (err, moviesStatus) => {
            if(err) return res.status(500).send({ message: 'Error on the server' });
            if(!moviesStatus) return res.status(404).send({ message: 'No movies status found.' });
            res.status(200).json(moviesStatus);
        })
    })

router.get('/movie/:user', isAuth, (req, res) => {
        let allMovies;
        let userMovies;
        const moviesToSend = [];

        Movie.find((err, movies) => {
            if(err) return res.status(500).send({ message: 'Error on the server' });
            if(!movies) return res.status(404).send({ message: 'No movies found.' });
            allMovies = movies;
            
            MovieStatus.find({userId: req.userId}, (err, moviesStatus) => {
                if(err) return res.status(500).send({ message: 'Error on the server' });
                if(!moviesStatus) return res.status(404).send({ message: 'No movies status found.' });
                userMovies = moviesStatus;
                
                allMovies.forEach(movie => {
                    let movieWithStatus;
                    movieWithStatus = userMovies.find( userMovie => String(userMovie.movieId) === String(movie._id));

                    if(!movieWithStatus){
                        moviesToSend.push(movie);
                    }
                });
                
                res.status(200).json(moviesToSend);
            });
        });   
    });

router.route('/movie/favorite/:user')
    .get(isAuth, (req, res) => {
        MovieStatus.find({ userId: req.userId, status: 'Accepted' })
            .populate('movieId')
            .then( moviesList => {
                if(!moviesList) return res.status(404).send({ message: 'No movies status found.' });
        
                res.status(200).json(moviesList);
            })
            .catch( err => {
                res.status(500).send({ message: 'Error on the server' });
            })
    })

module.exports = router;