const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

// Api endpoint for register new user

router.post('/register', (req, res) => {
    let error = '';
    if (!req.body.login) {
        error = 'Login is required!';
    }
    if (!req.body.password) {
        error = 'Password is required!';
    }
    if (!req.body.email) {
        error = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req.body.email)) {
        error = 'Invalid email addres';
    }
    if (!error) {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        User.create({
            login: req.body.login,
            password: hashedPassword,
            email: req.body.email
        }, (err, user) => {
            if (err) return res.status(500).send('There was problem registering the user.')

            res.status(200).send({
                auth: true
            });
        });
    } else {
        res.status(400).send({
            message: error
        });
    }
});

// Api endpoint for login user

router.post('/login', (req, res) => {
    User.findOne({
        login: req.body.login
    }, (err, user) => {
        if (err) return res.status(500).send('Error on the sever.');
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            auth: false
        });

        res.status(200).send({
            auth: true
        });
    });
});

module.exports = router;