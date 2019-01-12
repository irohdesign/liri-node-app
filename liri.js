
// dependencies
var dotenv = require("dotenv").config();
const keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);

// variables
var userInput = process.argv;

