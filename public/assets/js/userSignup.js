function userSignup(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser;
    // The ID token you need to pass to your backend:
    var newSignup = {
        eventId: 1,
        userId: 4
        

    };
    $.ajax("/api/userSignup", {
        type: "POST",
        data: newSignup
    }).then(
        function () {
            console.log("created new user");
            // Reload the page to get the updated list
            location.reload();
        }
    );
    $.post("/api/userSignup", {newSignup})
    .then(function(googleId) {
    console.log(googleId)
    })
  }