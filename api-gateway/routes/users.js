/**
 * /*
 * ============================================
 * ; Title:  API-Gateway
 * ; Author: Jonathan Disla
 * ; Date: 25 January 2021
 * ; Description: gateway project
 * ;===========================================
 *
 * @format
 */

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
