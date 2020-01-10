const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Define API routes here
app.use(routes);

// set up mongoose to leverage built-in JavaScript ES6 Promises
mongoose.Promise = Promise;
// if deployed, use the deployed database. else, use the local database.
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
// connect to the MongoDB
mongoose.connect(MONGODB_URI, { 
  // useUnifiedTopology: true,
  useNewUrlParser: true })
.then(function(){
    console.log('Successfully connected to Mongo database');
})
.catch(function(err) {
    console.error(err);
});

// Connect to the Mongo DB
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

