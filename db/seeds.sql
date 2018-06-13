-- INSERT INTO buckets (name, photo) VALUES ("Recipe", "https://via.placeholder.com/250x150"),
-- ("Fashion" "https://via.placeholder.com/350x150.jpg");

USE bucketodo_DB;


INSERT INTO bucketodo_DB.Users (name, createdAt, updatedAt) VALUES ("Yumna", "2018-01-01 01:00:00", "2018-01-01 01:00:00");


INSERT INTO bucketodo_DB.Buckets (name, photo, createdAt, updatedAt) 
VALUES  ("Recipes", "https://unsplash.com/search/photos/recipes", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Fashion", "https://unsplash.com/search/photos/fashion", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Craft", "https://unsplash.com/search/photos/craft", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Travel", "https://unsplash.com/search/photos/travel", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Party", "https://unsplash.com/search/photos/party", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Wedding", "https://unsplash.com/search/photos/wedding", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Humor", "https://unsplash.com/search/photos/funny", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Educational", "https://unsplash.com/search/photos/educational", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Music", "https://unsplash.com/search/photos/music", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Health", "https://unsplash.com/search/photos/health", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Life Hacks", "https://unsplash.com/search/photos/hacks", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Sports", "https://unsplash.com/search/photos/sports", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Animals", "https://unsplash.com/search/photos/animals", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Cars", "https://unsplash.com/search/photos/cars", "2018-01-01 01:00:00", "2018-01-01 01:00:00"),
        ("Electronics", "https://unsplash.com/search/photos/electronics", "2018-01-01 01:00:00", "2018-01-01 01:00:00");






INSERT INTO bucketodo_DB.Bookmarks (name, description, priority, BucketId, UserId,createdAt, updatedAt)
VALUES ("Food", "A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat.", 4, 1, 1, "2018-01-01 01:00:00", "2018-01-01 01:00:00");
