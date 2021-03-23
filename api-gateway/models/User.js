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

module.exports = mongoose.model("User", userSchema);
