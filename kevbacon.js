const kevinBaconFilms = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Kevin_Bacon_filmography&formatversion=2&rvprop=content&rvslots=*'

// Require API
const https = require('https');

// Get list of films
function getFilms () {

    // Connect to the API URL (https://teamtreehouse.com/user.json)
    const request = https.get(`${kevinBaconFilms}`, response => {
      //console.log(response.statusCode);
      
      let body = "";
      // Read the data - this is a buffer, packets of information
      // JS is non-blocking
      response.on('data', data => {
        body += data.toString()
      });
    
      response.on('end', () => {
        // Parse the data
        const page = JSON.parse(body);

        const content = page.query.pages[0].revisions[0].slots.main.content;
        var result = content.split("\n");
      
        // Clear incorrect data 
        result[0] = "";
      
        var result2 = JSON.stringify(result).split("[[");

        const movies = [];
        var mySubstring = "";
        var mySubstring2 = "";
        var ssStr = "";
        var ssStr2 = "";
      
        result2.forEach(newline => {
          mySubstring = newline.substring(0, newline.lastIndexOf("]]"));
          mySubstring2 = newline.substring(0, newline.lastIndexOf(" ("));
          
          if (mySubstring.length > 0) {
            var ssStr = mySubstring.substring(0, mySubstring.lastIndexOf(" ("));
            if (ssStr.length > 0) {
              movies.push(ssStr);
            }
            
             else {
               movies.push(mySubstring);
             }
          }
          
          else if (mySubstring2.length > 0) {
            ssStr2 = mySubstring2.substring(0, mySubstring2.lastIndexOf("]]"));
            if (ssStr2.length > 0) {
              movies.push(ssStr);
            }
            
             else {
               movies.push(mySubstring2);
             }
          }
          
        });
      
      // Print object data
      console.dir(movies);
        
      });
        
    });
  }
  

getFilms();