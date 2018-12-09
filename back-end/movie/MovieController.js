const express = require('express');
const bodyParser = require('body-parser');

const Movie = require('../models/Movie');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route('/movie')
    .post((req, res) => {
        Movie.creater({
            title: req.body.title,
            imageURL: req.body.imageURL,
            summary: req.body.summary,
            rating: req.body.rating
        }, (err, movie) => {
            if (err) return res.status(500).send('There was a problem crating movie.')
            res.status(200).send( 'Movie created' );
        });
    })
    .get((req, res) => {
        Movie.find((err, movies) => {
            if(err) res.status(500).send('Error on the server');
            if(!movies) res.status(404).send('No movies found.');
            res.status(200).json(movies);
        })
    })