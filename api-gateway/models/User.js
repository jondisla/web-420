/** @format */

/*
============================================
; Title:  API-Gateway
; Author: Jonathan Disla
; Date: 24 January 2021
; Description: gateway project
;===========================================
*/

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = (module.exports = mongoose.model("User", userSchema));

// add new user to db
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = { _id: id };
  User.findById(query, callback);
};
