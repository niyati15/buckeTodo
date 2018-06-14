$(document).ready(function () {
    //Grabbing the data from the create bucket form
//   if(!sessionStorage.getItem('logged')){
//       console.log("inside sessionstorage");
//       window.location.href = "/login";
//   }
    var bookmarkName = $("#bookmark-name");
    var bookmarkUrl = $("#bookmark-url");
    var bookmarkBucket = $("#bookmark-bucket");
    var bookmarkDescription = $("#description");
    var bookmarkPriority = $("#priority");
    var bookmarkForm = $("#add-bookmark");
    var userID = sessionStorage.getItem('id');
    //handle function for on submit of the form
    $(bookmarkForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        if (!bookmarkName.val().trim() || !bookmarkUrl.val().trim() || !bookmarkBucket.val().trim() || !bookmarkDescription.val().trim() || !bookmarkPriority.val().trim()) {
            return;
        }
        //create a new bucket object          
        var newBookmark = {
            name: bookmarkName.val().trim(),
            url:bookmarkUrl.val().trim(),
            BucketId: bookmarkBucket.val().trim(),
            description: bookmarkDescription.val().trim(),
            priority: bookmarkPriority.val().trim(),
            UserId: userID
        };
        console.log(bookmarkBucket.val().trim());
        submitBucket(newBookmark);
    })

    //function to submit and create a new bucket
    function submitBucket(bookmark) {
        console.log("inside submit bookmark");
        $.post("/api/user/"+userID+"/bookmark", bookmark, function () {
            window.location.href = "/";
        });
    }
    
});


