var db = require("../../models");

module.exports = function(app) {
  // Get all examples
  app.post("/find", function(req, res) {
    db.urls.findOne({
      where:{
        originalUrl : req.body.originalUrl
      } 
    }).then(function(result) {
          
          res.json(result);
        })
        .catch(function(err) {
          res.json(err);
        });
  });
  
};