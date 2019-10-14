var db = require("../models");

var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.post("/api/addBurger", function(req, res){
        var burger = req.body
  
        db.Burgers.create({ burgerName: burger.name, isDevoured: false })
        .then((dbRes) => {
            console.log("Created new burger with id: " + dbRes.burgerId);
            res.json(dbRes);
        });
      })
  
    app.post("/api/devourBurger", function(req, res){
      var burger = req.body
  
      db.Burgers.update({ isDevoured: true }, {
          where: {
          burgerId: burger.id
          }
      }).then((dbRes) => {
          console.log("Burger with id " + dbRes.id + "is devoured");
          res.json(dbRes);
      });
    })   

};