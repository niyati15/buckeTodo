$(function() {
	//on click of login tag
    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	//on click on register tab
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	//on click of log in button
	$(".btn-login").click(function(e) {
		// e.preventDefault();
		var username = $(".username-submit").val().trim();
		var password = $(".password-submit").val().trim();
		// e.preventDefault();
		// alert(username + password);

	});
	//on click of register button
	$(".btn-register").click(function(e) {
		e.preventDefault();
		var username = $(".username-register").val().trim();
		var email = $(".email-register").val().trim();
		var password1 = $(".password-register").val().trim();
		var password2 = $(".confirm-register").val().trim();
		
		if (password1 === password2){
			// alert(username + email + password1 + password2);
			$(".btn-register").attr("href", "#")
		}
		else {
			$(".password-mismatch").text("ERROR: your password and confirmation password do not match");
		}

	});

	$.get("api/user/1/bucket", function (res) {
		iteration(res);
	});

	function iteration(obj) {
		var bucketArray = [];
		for (var i = 0; i < obj.length; i++) {
			var currBucket = obj[i].name;
			if (checker(bucketArray, currBucket) === false) {
				bucketArray.push(currBucket);
				appendHTML(currBucket);
			}
		}
	}

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

	function appendHTML(bucketName) {
		// console.log(bucketName);
		var incoming = $(".container");
		var bucketView = "<div class='card addBucket'>" +
							"<div class='card-body crtBckt' href='#'>" + bucketName + "</div>" +
					
						"<div class='card-footer'>" +
						"<a href='#' class='card-link'><strong>" + "View Bucket" + "</strong></a>" + "<br>" +
						"<a href='#' class='card-link'><strong>" + "Add to Bucket"+ "</strong></a>" +
						"</div>" +
						"</div>" 
		incoming.append(bucketView);
	}


});

