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
    function submitBucket(bucket){
        $.post("/api/user/1/bucket", bucket, function() {
            window.location.href = "/";
          });
    }

});


