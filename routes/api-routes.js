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




    app.get("/api/user/:id/bucket", function (req, res) {
        // show all the buckets belonging to a user
        //the work of query SQL with sequalize
        db.Bookmarks.findAll({
            where: {
                Userid: req.params.id
            }
        })
            .then(function (dbBookmarks) {
                res.json(dbBookmarks)
            })
        console.log("/user/:id/bucket");
    });

    app.get("/api/user/:id/bucket/:bucketId/bookmark", function (req, res) {
        // all bookmarks for that bucket for a specific user
        //the work of query SQL with sequalize
        db.Bookmarks.findAll({
            where: {
                UserId: req.params.id,
                BucketId: req.params.bucketId
            }
        })
            .then(function (dbBookmarks) {
                res.json(dbBookmarks)
            })
        console.log("/user/:id/:bucketID/bookmark");
    });

    app.post("/api/user/:id/", function (req, res) {
        // get bucket id form req.body
        // creating a new bookmoark for a user in a specif bucket
        //the work of query SQL with sequalize


        //
        res.redirect("/")
        console.log("/user/:id/createBookmark");
    });

    app.post("/api/user/:id/bucket", function (req, res) {
        // get user id form req.params
        // creating a bucket for a specific user
        //the work of query SQL with sequalize
        console.log("/user/:id/createbucket");
    });



}