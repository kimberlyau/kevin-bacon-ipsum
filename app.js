// Server
var path = require("path");
var mysql = require("mysql");

// Express application instance
var express = require("express");
var app = express();

// Require express routes
var routes = require('./router');

app.use("/static", express.static('./static/'));

app.use(routes);

/*
var con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM movies", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"))
})

app.listen(8000, () => {
  console.log("Listening on port " + 8000)
})