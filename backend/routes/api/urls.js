var db = require("../../models");
const router = require("express").Router();


router.route("/findLong")
.post((req, res) => {
  db.Urls.findOne({
    where:{
      originalUrl : req.body.originalUrl
    } 
  }).then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.json(err);
      });
})

router.route("/findShort")
.post((req, res) => {
  db.Urls.findOne({
    where:{
      shortCode : req.body.shortCode
    } 
  }).then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.json(err);
      });
})

router.route("/submit")
.post((req, res)=>{
  db.Urls.findOrCreate({where:{
    originalUrl : req.body.originalUrl,
    shortCode: req.body.shortCode
  }})
  .then((result)=> {
        res.json(result);
      })
      .catch((err)=> {
        res.json(err);
      });
});

  

module.exports = router;