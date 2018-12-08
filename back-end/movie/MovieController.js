const express = require('express');
const bodyParser = require('body-parser');

const Movie = require('../models/Movie');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route('/movie')
    .post((req, res) => {
        
    })