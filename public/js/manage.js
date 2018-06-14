$(document).ready(function () {
    //Grabbing the data from the create bucket form
//   if(!sessionStorage.getItem('logged')){
//       console.log("inside sessionstorage");
//       window.location.href = "/login";
//   }
      console.log("inside manage.js");
    var bucketName = $("#bucket-name");
    var photoUrl = $("#bucket-photo-url");
    var userID = sessionStorage.getItem('id');
    var bucketForm = $("#create-bucket");
    var bucketSelect = $("#bookmark-bucket");
    //handle function for on submit of the form
    $(bucketForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        if (!bucketName.val().trim() || !photoUrl.val().trim()) {
            return;
        }
        //create a new bucket object          
        var newBucket = {
            name: bucketName.val().trim(),
            photo: photoUrl.val().trim(),
            UserId: userID
        };
        submitBucket(newBucket);
    })

    //function to submit and create a new bucket
    function submitBucket(bucket) {
        $.post("/api/user/"+userID+"/bucket", bucket, function () {
            window.location.href = "/";
        });
    }
    getBuckets();
    function getBuckets() {
        console.log("inside getBuckets()");
        $.get("/api/user/"+userID+"/bucket", renderBucketList);
    }

    function renderBucketList(data) {
        console.log("inside renderBucketList()");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createBucketRow(data[i]));
        }
        bucketSelect.empty();
        bucketSelect.append(rowsToAdd);
        bucketSelect.val(userID);
    }

    function createBucketRow(bucket) {
        console.log("inside createBucketRow()");
        var listOption = $("<option>");
        listOption.attr("value", bucket.id);
        listOption.text(bucket.name);
        console.log("listOption: ",listOption);
        return listOption;

    }
});


