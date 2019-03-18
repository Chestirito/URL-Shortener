const router = require("express").Router();
const urlRoutes = require("./urls");

// Book routes
router.use("/urls", urlRoutes);

module.exports = router;