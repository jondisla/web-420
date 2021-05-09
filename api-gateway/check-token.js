/**
 * /*
 * ============================================
 * ; Title:  Check Token
 * ; Author: Jonathan Disla
 * ; Date: 9 May 2021
 * ; Description: Verify JSON token
 * ;===========================================
 *
 * @format
 */

var jwt = require("jsonwebtoken");
var config = require("./config");

// Valid token
function checkToken(req, res, next) {
  // header token
  var token = req.headers["x-access-token"];

  // If token null
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  // Valid token
  jwt.verify(token, config.web.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

// export checkToken
module.exports = checkToken;
