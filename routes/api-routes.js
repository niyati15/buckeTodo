// Requiring model
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.post("/api/user", function (req, res) {
        console.log("/api/user");
        console.log(req.body);
        db.Users.create(req.body)
            .then(function (dbUser) {
                console.log("dbUser: ", dbUser);
                res.json(dbUser);
            });

    });

    app.post("/signin", function (req, res) {
        console.log("hi there!!");
        db.Users.findOne({ 
            where: {
                email: req.body.email, 
                password:req.body.password
            } 
        }).then(function(result) {
        
            if (!result) {
                res.json(false);
            } else {
                res.json(result);
            }
         });
    
    });

    //show all users in database
    app.get("/api/users", function (req, res) {
        db.Users.findAll({})
            .then(function (dbUsers) {
                res.json(dbUsers);
            })
    })

    app.get("/api/user/:id/bucket", function (req, res) {
        // show all the buckets belonging to a user
        //the work of query SQL with sequalize
        console.log("meow meow")
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

    app.post("/api/user/:id/bucket", function (req, res) {
        // get user id form req.params 
        console.log(req.body);
        db.Buckets.create(req.body)
            .then(function (dbBucket) {
                console.log("dbBucket: ", dbBucket);
                res.json(dbBucket);
            });
        // creating a bucket for a specific user
        //the work of query SQL with sequalize
    });

    app.post("/api/user/:id/", function (req, res) {
        // get bucket id form req.body
        // creating a new bookmoark for a user in a specific bucket
        //the work of query SQL with sequalize

        res.redirect("/")
        console.log("/user/:id/createBookmark");
    });




}