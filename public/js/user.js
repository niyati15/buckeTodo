$(document).ready(function () {
    console.log("document.ready called");
    //Grabbing the data from the create bucket form
        var username = $("#username-register");
        var email = $("#email-register");
        var password = $("#password-register");
        var confirmPassword = $("#confirm-password-register")
        var registerForm = $("#register-form");

    //handle function for on submit of the form
        $(".btn-register").click(function(event) {
            event.preventDefault();
            if (!username.val().trim() || !email.val().trim() || !password.val().trim() || !confirmPassword.val().trim()) {
                console.log("inside if");
                return;
              }
    //create a new bucket object          
              var newUser = {
                username: username.val().trim(),
                email: email.val().trim(),
                password: password.val().trim(),
                confirmPassword: confirmPassword.val().trim()
            };
            console.log(newUser);
            submitUser(newUser);
            
        })
    
    //function to submit and create a new bucket
        function submitUser(user){
            console.log("submitUser() function || user: ", user );
            $.post("/api/user", user, function() {
                window.location.href = "/";
              });
        }
    
    });
    
    
    