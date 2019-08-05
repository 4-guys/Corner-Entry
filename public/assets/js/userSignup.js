// function userSignup(googleUser) {
//     // Useful data for your client-side scripts:
//     var profile = googleUser;
//     // The ID token you need to pass to your backend:
//     var newSignup = {
//         eventId: 1,
//         userId: 4
        

//     };
//     $.ajax("/api/userSignup", {
//         type: "POST",
//         data: newSignup
//     }).then(
//         function () {
//             console.log("created new user");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );

//   }

  $(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
    var fnInput = $("input#first-name");
    var lnInput = $("input#last-name");
    var addressInput = $("input#address");
    var phoneInput = $("input#phone-num");
    function resetErrorDisplay() {
        $("#alert").hide();
    }

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            EventId: 1,
            UserId: 4
           
        };
        console.log(userData)
        signUpUser(userData.EventId, userData.UserId,);
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(EventId, UserId) {
        $.post("/api/userSignup", {
            EventId: EventId,
            UserId: UserId,
           
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});