const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})