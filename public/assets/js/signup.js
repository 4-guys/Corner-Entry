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
    emailInput.on("keyup", resetErrorDisplay);
    passwordInput.on("keyup", resetErrorDisplay);
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            firstName: fnInput.val().trim(),
            lastName: lnInput.val().trim(),
            address: addressInput.val().trim(),
            phone: phoneInput.val().trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        console.log(userData)
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.address, userData.phone);
        emailInput.val("");
        passwordInput.val("");
        fnInput.val().trim();
        lnInput.val().trim();
        addressInput.val().trim();
        phoneInput.val().trim()
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, firstName, lastName, address, phone) {
        $.post("/api/signup", {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone
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