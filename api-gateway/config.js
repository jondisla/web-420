/** @format */

/*
============================================
; Title:  API-Gateway
; Author: Jonathan Disla
; Date: 24 January 2021
; Description: gateway project
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";
//key
config.web.secret = "topsecret";

module.exports = config;
