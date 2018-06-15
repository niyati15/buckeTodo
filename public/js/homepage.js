
$(function () {
	if (!sessionStorage.getItem('logged')) {
		console.log("inside sessionstorage");
		window.location.href = "/login";
	}
	var userID = sessionStorage.getItem('id');
	// //on click of log in button
	// $(".btn-login").click(function(e) {
	// 	// e.preventDefault();
	// 	var username = $(".username-submit").val().trim();
	// 	var password = $(".password-submit").val().trim();
	// 	// e.preventDefault();
	// 	// alert(username + password);

	// });
	// //on click of register button
	// $(".btn-register").click(function(e) {
	// 	e.preventDefault();
	// 	var username = $(".username-register").val().trim();
	// 	var email = $(".email-register").val().trim();
	// 	var password1 = $(".password-register").val().trim();
	// 	var password2 = $(".confirm-register").val().trim();

	// 	if (password1 === password2){
	// 		// alert(username + email + password1 + password2);
	// 		$(".btn-register").attr("href", "#")
	// 	}
	// 	else {
	// 		$(".password-mismatch").text("ERROR: your password and confirmation password do not match");
	// 	}



	// });

	$.get("api/user/" + userID + "/bucket", function (res) {
		iteration(res);
	});
	// iterate through json object we got from query call
	function iteration(obj) {
		var bucketArray = [];
		for (var i = 0; i < obj.length; i++) {
			var currBucket = obj[i].name;
			var currPhoto = obj[i].photo
			var currId = obj[i].id;
			if (checker(bucketArray, currBucket, currPhoto) === false) {
				bucketArray.push(currBucket, currPhoto);
				appendHTML(currBucket, currPhoto, currId);
			}
		}
	}
	//check if bucket name has already been captured
	function checker(arr, curr) {
		for (var j = 0; j <= arr.length; j++) {
			if (arr[j] === curr) {
				return true;
			}
			else {
				return false;
			}
		}
	}

	// append new bucket card onti DOM
	function appendHTML(bucketName, currPhoto, currId) {
		console.log(currPhoto);
		var incoming = $(".container");
		var bucketView = "<div class='card addBucket' data-id='" + currId +"' >" +
							 "<div class='card-header'><strong>" + bucketName + "</strong>"+
							 "</div>" +
							 "<div class='card-body card-bucket crtBckt');>" +
							 	"<img src='" + currPhoto + "' style='color:blue;' >" +
							 "</div>" +
							 "<div class='card-footer'>" +
								"<a href='/bookmarks' class='card-link'><strong>" + 
								"<img src='/../image/view.png' class='viewbucket'> "  + "</strong>"+
								"</a>" + 
								"<a href='/bookmark' class='card-link'><strong>" + 
									"<img src='/../image/add.png' class='viewbucket' style=':;'> " + "</strong>"+
								"</a>" +
							 "</div>" +
							"</div>"
		incoming.append(bucketView);
	}

});


$(document).on("click", ".addBucket", function(){
	console.log("before any session storage");
	currId = $(this).data("id");
	sessionStorage.removeItem("bucketId");
	sessionStorage.setItem("bucketId", currId);
	console.log("session storage stuff works...kinda");
	console.log(currId);
	window.location.href="/bookmarks"
});
