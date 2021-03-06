/** @format */
/*
============================================
; Title:  API-Gateway
; Author: Jonathan Disla
; Date: 24 January 2021
; Description: gateway project
;===========================================
*/

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var apiCatalog = require("./routes/api-catalog");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

mongoose.Promise = require("bluebird");

mongoose
  .connect(
    "mongodb+srv://jondisla:Casfm07@cluster0.lti6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      promiseLibrary: require("bluebird"),
    }
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//Register api catalog
app.use("/api", apiCatalog);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
