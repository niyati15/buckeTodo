$(document).ready(function () {
    //Grabbing the data from the create bucket form
    var bucketName = $("#bucket-name");
    var photoUrl = $("#bucket-photo-url");
    var bucketForm = $("#create-bucket");
    //handle function for on submit of the form
    $(bucketForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        if (!bucketName.val().trim() || !photoUrl.val().trim()) {
            return;
        }
        //create a new bucket object          
        var newBucket = {
            name: bucketName.val().trim(),
            photo: photoUrl.val().trim()
        };
        submitBucket(newBucket);
    })

    //function to submit and create a new bucket
    function submitBucket(bucket) {
        $.post("/api/user/1/bucket", bucket, function () {
            window.location.href = "/";
        });
    }


    function getBuckets() {
        $.get("/api/user/1/bucket", renderBucketList);
    }

    function renderBucketList(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createBucketRow(data[i]));
        }
    }

    function createBucketRow(bucket) {
        var listOption = $("<option>");
        listOption.attr("value", bucket.id);
        listOption.text(bucket.name);
        return listOption;
    }

});


