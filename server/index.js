const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://userartevideo:LerWsCXq2oCPMva8@cluster0-it4x2.mongodb.net/artevideo?retryWrites=true&w=majority', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connected");
});


server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(5001, () => {
	console.log('Server is runnning in http://localhost:5001');
});