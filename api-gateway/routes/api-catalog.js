/**
 * API Routes
 *
 * @format
 */

/*
============================================
; Title:  API-Gateway
; Author: Jonathan Disla
; Date: 24 January 2021
; Description: gateway project
;===========================================
*/

var express = require("express");
var router = express.Router();
var auth_controller = require("../controllers/authController");
// POST request for registering a user
router.post("/auth/register", auth_controller.user_register);
// GET request for verifying user tokens
router.get("/auth/token", auth_controller.user_token);
module.exports = router;