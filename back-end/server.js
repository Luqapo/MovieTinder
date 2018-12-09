const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const AuthController = require('./auth/AuthController');
const MovieController = require('./movie/MovieController');

const app = express();
const PORT = process.env.PORT || 5000;

const uri = 'mongodb://Luq:Haslo1@cluster0-shard-00-00-gw1sh.mongodb.net:27017,cluster0-shard-00-01-gw1sh.mongodb.net:27017,cluster0-shard-00-02-gw1sh.mongodb.net:27017/MovieTinder?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true }, () => {
    console.log('Connected to database.');
});

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api/auth', AuthController);
app.use('/api', MovieController);

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})