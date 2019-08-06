$(document).ready(function () {
    console.log("test")
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var eventName = $("input#eventName");
    var eventDescription = $("input#eventDescription");
    var eventDate = $("input#eventDate");
    var registrationStart = $("input#registrationStart");
    var registrationEnd = $("input#registrationEnd");
    var eventLocation = $("input#eventLocation");
    function resetErrorDisplay() {
        $("#alert").hide();
    }
    eventName.on("keyup", resetErrorDisplay);
    eventDescription.on("keyup", resetErrorDisplay);
    // When the signup button is clicked, we validate the eventName and eventDescription are not blank
    signUpForm.on("submit", function (event) {
        console.log("clicked")
        event.preventDefault();
        var userData = {
            eventName: eventName.val().trim(),
            eventDescription: eventDescription.val().trim(),
            eventDate: eventDate.val(),
            registrationStart: registrationStart.val(),
            registrationEnd: registrationEnd.val(),
            eventLocation: eventLocation.val().trim()
        };
        if (!userData.eventName || !userData.eventDescription) {
            return;
        }
        console.log(userData)
        // If we have an eventName and eventDescription, run the signUpUser function
        signUpUser(userData.eventName, userData.eventDescription, userData.eventDate, userData.registrationStart, userData.registrationEnd, userData.eventLocation);
        eventName.val("");
        eventDescription.val("");
        eventDate.val();
        registrationStart.val();
        registrationEnd.val();
        eventLocation.val().trim()
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(eventName, eventDescription, eventDate, registrationStart, registrationEnd, eventLocation) {
        $.post("/api/events", {
            eventName: eventName,
            eventDescription: eventDescription,
            eventDate: eventDate,
            registrationStart: registrationStart,
            registrationEnd: registrationEnd,
            eventLocation: eventLocation
        }).then(function (data) {
            console.log("sent")
            window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});