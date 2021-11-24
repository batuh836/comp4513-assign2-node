require('dotenv').config();
const express = require('express');
const app = express();

// serves up static files from the public folder.
app.use(express.static('public'));

// also add a path to static
app.use('/static', express.static('public'));

// get our data model
const Play = require('./models/Play.js');
const User = require('./models/User.js');

// tell node to use json and HTTP header features in body-parser
app.use(express.urlencoded({extended: true}));

// use the route handlers
const playRouter = require('./handlers/playRouter.js');
const userRouter = require('./handlers/userRouter.js');

playRouter.handleAllPlays(app, Play);
playRouter.handleSinglePlay(app, Play);
userRouter.handleSingleUser(app, User);


// create connection to database
require('./handlers/dataConnector.js').connect();

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});