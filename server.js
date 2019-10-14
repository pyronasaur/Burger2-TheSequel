var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require controller
require("./controllers/burgers_controller.js")(app);
console.log("before I synced i guess");
db.sequelize.sync({ force: false }).then(function() {
  console.log("synced i guess");
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

console.log("past the sync");
