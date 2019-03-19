const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}


app.use(apiRoutes);

var syncOptions = { force: false };


if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT,function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});