// Requiring model
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.get("/signup", function (req, res) {
        console.log("/signup");
    });

    app.get("/signin", function (req, res) {
        console.log("/signin");
    });

    app.get("/user/:id/bucket", function (req, res) {
        console.log("/user/:id/bucket");
    });

    app.get("/user/:id/:bucketID/bookmark", function (req, res) {
        console.log("/user/:id/:bucketID/bookmark");
    });

    app.get("/user/:id/createBookmark", function (req, res) {
        console.log("/user/:id/createBookmark");
    });

    app.get("/user/:id/createbucket", function (req, res) {
        console.log("/user/:id/createbucket");
    });



}