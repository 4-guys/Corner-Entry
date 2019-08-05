$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    // $.get("/api/user_data").then(function (data) {

    //     $(".member-name").text(data.email);
    // });
    var eventContainer = $("#event-list");
    var event;
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
            eventAdd.push("<div>" + event[i].eventName + "<br>" + "<form class='signup'> <button onclick='"+clickFunction()+"' id='" + event[i].id + "' class='btn' > Sign Up </button> </form>" + "</div>");
        }
        eventContainer.append(eventAdd);
    }
    // signUpForm.on("button",
    function clickFunction() {
        console.log("clicked");
        var userData = {
            EventId: this.id,
            UserId: 4
        };
        console.log(userData)
        signUpUser(userData.EventId, userData.UserId);
    };

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


    // function createNewRows(events){
    //     var newEvent= $("<div>");
    //     console.log(events.eventName);
    //     newEvent.text(events.eventName);
    // }
});