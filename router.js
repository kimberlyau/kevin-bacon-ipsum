// Require the necessary modules
const loremIpsum = require("./kevbacon.js");
const fs = require("fs");
const querystring = require("querystring");

// Require express and create an express router object
const express = require('express');
const router = express.Router();

// // Route that serves index.html
// router.get('/', (request, response) => {
//   response.setHeader('Content-Type', 'text/html');
//   let fileContents = fs.readFileSync("./views/index.html", {encoding: "utf8"});
//   // Send a response to the client with the index.html file
//   response.write(fileContents);
//   response.end();
// });

// Route that generates the lorem ipsum text and reloads a modified index.html
router.post('/', (request, response) => {
  request.on("data", function(inputValue) {

    // Convert the POST data into a readable string
    let query = inputValue.toString(); // i.e. numParagraphs=3
    // Parse the query into a key/value pair and store the value of numParagraphs
    // in a variable

    let numParagraphs = querystring.parse(query).numParagraphs;

    // Return generated text
    let loremIpsumText = loremIpsum.generateText(numParagraphs);

    // Capture the contents of index.html in a variable
    let fileContents = fs.readFileSync("./views/index.html", {encoding: "utf8"});

    // Replace the placeholder with the generated text
    fileContents = fileContents.replace("<div class='placeholder-div'></div>", loremIpsumText);
    response.setHeader('Content-Type', 'text/html');

    // Send a response to the client with the modified index.html file
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;