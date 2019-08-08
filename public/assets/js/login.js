// var token;
// var userIdtest = "not yet changed"
// function onSignIn(googleUser) {
//   // Useful data for your client-side scripts:
//   var profile = googleUser.getBasicProfile();
//  console.log(profile.getId())
//   // The ID token you need to pass to your backend:

//   var id_token = googleUser.getAuthResponse().id_token;
//   // $.post("/api/token", { token: id_token })
// }
// async function verifyToken(token){
//   const {OAuth2Client} = require('google-auth-library');
//   const client = new OAuth2Client(CLIENT_ID);
//   async function verify() {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//         // Or, if multiple clients access the backend:
//         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     });
//     const payload = ticket.getPayload();
//     const userid = payload['sub'];
//     // If request specified a G Suite domain:
//     //const domain = payload['hd'];
//     console.log( userid)
//     return userid
//   }
//   verify().catch(console.error);
// }
$(document).ready(function () {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    function resetErrorDisplay() {
        $("#alert").hide();
    }
    emailInput.on("keyup", resetErrorDisplay);
    passwordInput.on("keyup", resetErrorDisplay);
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
    });
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function (data) {
            console.log("I'm sign in");
            // data.redirect contains the string URL to redirect to
            window.location.replace(data);
            emailInput.val("");
            passwordInput.val("");
            // If there's an error, log the error
        }).catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        $("#alert .msg").text("Invalid username or password.");
        $("#alert").fadeIn(500);
    }
})
