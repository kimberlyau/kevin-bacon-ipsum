(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
const kevinBaconFilms = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Kevin_Bacon_filmography&formatversion=2&rvprop=content&rvslots=*'

// Require API
var uniq = require('uniq');
//var https = require('https');

// Get list of films
this.LogData = function getFilms () {

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

        return movies;
      

      });
        
    });
  }
  

},{"uniq":1}]},{},[2]);
