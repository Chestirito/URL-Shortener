var db = require("../../models");

module.exports = function(app) {
  // Get all examples
  app.get("/", function(req, res) {
    db.urls.findAll({
      attributes: ['originalUrl','shortCode', 'requested', 'submitted']
    }).then(function(results) {
      res.json(results);
    });
  });
  
};