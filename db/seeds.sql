-- INSERT INTO buckets (name, photo) VALUES ("Recipe", "https://via.placeholder.com/250x150"),
-- ("Fashion" "https://via.placeholder.com/350x150.jpg");

USE bucketodo_DB;



INSERT INTO bucketodo_DB.Users (username, email, password, createdAt, updatedAt) VALUES ("Yumna", "yumna@awesome.com", "password", "2018-01-01 01:00:00", "2018-01-01 01:00:00");


INSERT INTO bucketodo_DB.Buckets (name, photo, UserId, createdAt, updatedAt) 
VALUES  ("Recipes", "https://unsplash.com/search/photos/recipes", 1,"2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Fashion", "https://unsplash.com/search/photos/fashion", 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Craft", "https://unsplash.com/search/photos/craft", 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00");


INSERT INTO bucketodo_DB.Bookmarks (name, description, priority, BucketId, UserId,createdAt, updatedAt)
VALUES ("Food", "A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat.", 4, 1, 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00");
