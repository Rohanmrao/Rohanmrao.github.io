require('dotenv').config(); // takes in DB url from the .env file

const express = require('express');
const server = express();
const mongoose = require('mongoose');

const visitor_model = require('../models/schema');
const path = require('path');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}); //  connect to the DB from the url in the .env file

const db = mongoose.connection;

db.on('error', (err) => {

    console.log("Couldn't access the DB");
    console.error(err);

}); // in case of a connection error

db.once('open', () => console.log("Connected to the Database"));    //successfull connection

server.use(express.json()); // initialise the use of middleware


const router = require('../routes/routes');
server.use('/visitor',router);  // /visitor is the ulr entrypoint to access all the routes in the router.js middleware

const port = 5000;
server.listen(port, () => {console.log(`Server started on port ${port} ...`)});
