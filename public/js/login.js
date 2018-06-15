// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  console.log("login.js called");

  //on click of login tab
  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  //on click on register tab
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  //on click of register button
  $(".btn-register").click(function (e) {
    e.preventDefault();
    var username = $(".username-register").val().trim();
    var email = $(".email-register").val().trim();
    var password1 = $(".password-register").val().trim();
    var password2 = $(".confirm-register").val().trim();

    if (password1 === password2) {
      // alert(username + email + password1 + password2);
      $(".btn-register").attr("href", "/login")
    }
    else {
      $(".password-mismatch").text("ERROR: your password and confirmation password do not match");
    }
  });

  //submit button 
  $(".btn-login").on("click", function (event) {
    event.preventDefault();

    var newLogin = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    };

    // Send the POST request.
    $.ajax("/signin", {
      type: "POST",
      data: newLogin
    }).then(
      function (result) {
        console.log("result");
        if (result) {
          console.log("matches the database");
          console.log("result: " + result.username + " logged in.");
          window.sessionStorage.setItem('logged', true);
          window.sessionStorage.setItem('id', result.id);
          window.sessionStorage.setItem('username', result.username);
          window.location.href = '/';

        } else {
          console.log("does not match database");
          $(".password-mismatch").text("Incorrect Username or Password");
          // $('#myModal').modal('show');

        }
        // Reload the page to get the updated list
        //   location.reload();
      }
    );
  });


});
