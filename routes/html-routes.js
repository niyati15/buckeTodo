// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/add_bookmark", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newBookmark.html"));
  });

  // blog route loads blog.html
  app.get("/add_bucket", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newBucket.html"));
  });

  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

};