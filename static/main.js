// For use with kevbacon.js
var module = require('./kevbacon');

// On button click after the DOM is loaded
$(function() {
    $("#btnGen").on("click", function() {
        document.getElementById("output").innerHTML = module.generateText();
    });
});


/*
= function generateText() {
    
    alert("hi");
    //document.getElementById("output").innerHTML = this.LogData; //.stringify();
    //console.dir(this.LogData);
}
*/

