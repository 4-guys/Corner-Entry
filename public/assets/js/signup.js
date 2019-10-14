$(document).ready(function () {
    async function finduser() {

    user = await $.get("/api/user_data");
    

    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email");
    // var passwordInput = $("input#password");
    var fnInput = $("input#first-name");
    var lnInput = $("input#last-name");
    var addressInput = $("input#address");
    var phoneInput = $("input#phone-num");

    console.log(user)
    $('#first-name').val(user.firstName)
    $('#last-name').val(user.lastName)
    $('#email').val(user.email)
    $('#address').val(user.address)
    $('#phone-num').val(user.phone)

    function resetErrorDisplay() {
        $("#alert").hide();
    }
    emailInput.on("keyup", resetErrorDisplay);
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            firstName: fnInput.val().trim(),
            lastName: lnInput.val().trim(),
            email: emailInput.val().trim(),
            address: addressInput.val().trim(),
            phone: phoneInput.val().trim(),
            id: user.id
        };

        console.log(userData)
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
 
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        console.log("call made for "+userData.firstName)
            $.ajax({
              method: "PUT",
              url: "/api/update",
              data: userData

            })
              .then(function() {
                console.log("updated");
              });
          }

        // $.put("/api/update", {
        //     id: id,
        //     firstName: firstName,
        //     lastName: lastName,
        //     address: address,
        //     phone: phone
        // })
        // .then(function (data) {
        //     window.location.replace(data);
        //     // If there's an error, handle it by throwing up a bootstrap alert
        // }).catch(handleLoginErr);
    
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }}
    finduser()
});