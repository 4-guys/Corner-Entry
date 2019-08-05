// signUpForm.on("button",
$(document).on("click", ".eventSignup", function clickFunction() {
    console.log("clicked");
    var userData = {
        EventId: $(this).attr("data-eventId"),
        UserId: user.id
    };
    console.log(userData)
    signUpUser(userData.EventId, userData.UserId);
});
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
var event;
var user;
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    async function doEverything(){
    console.log("test")
    user= await $.get("/api/user_data");
    console.log(user)

        $(".member-name").text(user.email);
    
    var eventContainer = $("#event-list");
  
    getEvent();
    var signUpForm = $("form.signup");

    function getEvent(events) {
        $.get("/api/events").then(function (data) {
            event = data;
            initialRows();
        });
    }
    function initialRows() {
        eventContainer.empty();
        var eventAdd = [];
        for (var i = 0; i < event.length; i++) {
            eventAdd.push("<div><h2>" + event[i].eventName + "</h2><br><p>"+event[i].eventDescription + "</p><br><button data-eventId='" + event[i].id + "' class='btn eventSignup' > Sign Up </button>" + "</div>");
        }
        eventContainer.append(eventAdd);
    }
    



}
doEverything()
    // function createNewRows(events){
    //     var newEvent= $("<div>");
    //     console.log(events.eventName);
    //     newEvent.text(events.eventName);
    // }
});