// Return Lorem Ipsum Text
function generateText(numParagraphs) {
  // Selection of Kevin Bacon's movies 
  let movies = [
    "balto",
    "beauty shop",
    "cop car",
    "criminal law",
    "diner",
    "elephant white",
    "flatliners",
    "footloose",
    "friday the 13th",
    "hollow man",
    "loverboy",
    "picture perfect",
    "pyrates",
    "queens logic",
    "quicksilver",
    "sleepers",
    "starting over",
    "super",
    "the darkness",
    "trapped",
    "tremors",
    "wild things" 
  ];

  let loremIpsum = [
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "mollis",
    "justo",
    "vel",
    "imperdiet",
    "convallis",
    "odio",
    "eros",
    "tristique",
    "lectus",
    "quis",
    "auctor",
    "quam",
    "felis",
    "a",
    "faucibus erat"
  ];

  // Combined array
  kevBaconIpsum = movies.concat(loremIpsum);

  var textArray = "Lorem ipsum "
  //console.log(movies);

  // Randomly generate Kevin Bacon Ipsum for numParagraph many paragraphs
  for (let i=0; i < numParagraphs; i++) {
    // Select from kevBaconIpsum array
    for (let j = 0; j < 10; j++) {
      textArray += kevBaconIpsum[Math.floor(Math.random() * kevBaconIpsum.length)] + " ";
    }

  }
  return textArray;

};

var outputResults = new generateText();

// Exported back for usage elsewhere;

module.exports =  {
  outputResults: outputResults,
  generateText: generateText
};
