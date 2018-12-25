const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const CreateUserSchema = require('./crateUserSchema');

const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

// Api endpoint for register new user

router.post('/register', (req, res) => {
        CreateUserSchema.validate(req.body, {abortEarly: false})
        .then(validatedUser => {
            const hashedPassword = bcrypt.hashSync(req.body.password, 8);
            validatedUser.password = hashedPassword;

            User.create(validatedUser, (err, user) => {
                if (err) res.status(500).send('There was problem registering the user.')

                req.session.user = user;
                res.status(200).send({ auth: true });
            });
        })
        .catch(validationError => {
            const errorMessage = validationError.details.map(d => d.message);
            res.status(400).send(errorMessage);
        })
        
    
});

// Api endpoint for login user

router.post('/login', (req, res) => {
    User.findOne({
        login: req.body.login
    }, (err, user) => {
        if (err) return res.status(500).send('Error on the sever.');
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false });

        req.session.user = user;
        res.status(200).send({ auth: true });
    });
});

router.post('/logoff', (req, res) => {
    req.session.user = null;
    res.status(200).send({ auth: false });
})

module.exports = router;