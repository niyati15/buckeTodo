// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  console.log("login.js called");
    $(".btn-login").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
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
        function(result) {
            console.log("result");
            if(result) {
                console.log("matches the database");
                console.log("result: "+result.username+ " logged in." );
                window.sessionStorage.setItem('logged', true);
                window.sessionStorage.setItem('id', result.id);
                window.sessionStorage.setItem('username', result.username);
                window.location.href = '/';

            } else {
                console.log("does not match database");
                // $('#myModal').modal('show');

            }
          // Reload the page to get the updated list
        //   location.reload();
        }
      );
    });
  
  });
  