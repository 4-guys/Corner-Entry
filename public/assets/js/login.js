function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    $.post("/api/token", { token: id_token })
        .then(function (googleId) {
            console.log(googleId)
        })
}