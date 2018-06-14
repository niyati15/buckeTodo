// Requiring model
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    //CREATE new user
    app.post("/api/user", function (req, res) {
        console.log("/api/user");
        console.log(req.body);
        db.Users.create(req.body)
            .then(function (dbUser) {
                console.log("dbUser: ", dbUser);
                res.json(dbUser);
            });

    });

    //CREATE bucket for a user
    app.post("/api/user/:id/bucket", function (req, res) {
        console.log("meow meow helo")
        console.log(req.body);
        db.Buckets.create(req.body)
            .then(function (dbBucket) {
                console.log("dbBucket: ", dbBucket);
                res.json(dbBucket);
            });
    });

    //CREATE new bookmark for a bucket belonging to user
    app.post("/api/user/:id/", function (req, res) {
        db.Bookmarks.create(req.body)
            .then(function (dbBookmarks) {
                res.json(dbBucket);
            });
        // res.redirect("/")
        // console.log("/user/:id/createBookmark");
    });

    //CHECK if login info exists
    app.post("/signin", function (req, res) {
        console.log("hi there!!");
        db.Users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function (result) {

            if (!result) {
                res.json(false);
            } else {
                res.json(result);
            }
        });

    });

    //GET all users in database
    app.get("/api/users", function (req, res) {
        db.Users.findAll({})
            .then(function (dbUsers) {
                res.json(dbUsers);
            })
    })

    //GET all buckets belonging to a user
    app.get("/api/user/:id/bucket", function (req, res) {
        console.log("meow meow")
        db.Buckets.findAll({
            where: {
                Userid: req.params.id
            }
        })
            .then(function (dbBookmarks) {
                res.json(dbBookmarks)
            })
    });

    //GET all bookmarks belonging to buckets of a user
    app.get("/api/user/:id/bucket/:bucketId/bookmark", function (req, res) {
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

    //UPDATE bucket for a specific user
    app.put("/api/user/:id/bucket", function (req, res) {  //is the route correct?
        db.Buckets.update(req.body, {
            where: {
                //how to catch the exact bucket to edit
            }
        })
        .then(function (dbBuckets) {
            res.json(dbBuckets)
        });
    });

    //UPDATE a bookmark in a bucket, for specific user
    app.put("/user/:userId/bucket/:bucketId/bookmark/:bookmarkId", function (req, res) {
        db.Bookmarks.update(req.body, {
            where: {
                //how to catch the exact bucket to edit
            }
        })
        .then(function (dbBookmarks) {
            res.json(dbBookmarks)
        });
    });

    //DELETE bucket for a specific user
    app.delete("/user/:userId/bucket/:bucketId", function (req, res) {
        db.Buckets.destroy({
            where: {
                //how to catch the exact bucket to delete
            }
        })
        .then(function (dbBuckets) {
            res.json(dbBuckets)
        });
    });

    //DELETE a bookmark in a bucket, for specific user
    app.delete("/user/:userId/bucket/:bucketId/bookmark/:bookmarkId", function (req, res) {
        db.Bookmarks.destroy({
            where: {
                //how to catch the exact bucket to delete
            }
        })
        .then(function (dbBookmarks) {
            res.json(dbBookmarks)
        });
    });
}

