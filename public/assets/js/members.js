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
       //window.location.replace(data);
        location.reload();
        // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
}
function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
}
var event;
var user;
var reglist;
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    async function doEverything() {
        console.log("test")
        user = await $.get("/api/user_data");
        console.log(reglist)

        $(".member-name").text(user.firstName + " " + user.lastName);

        var eventContainer = $("#event-list");

        event = await getEvent();
        reglist = await registrationList();
        
        initialRows();
        var signUpForm = $("form.signup");

        function getEvent(events) {
            return $.get("/api/events")
        }
        function registrationList() {
            return $.get("/api/eventReg");
        }
        function initialRows() {
            eventContainer.empty();
            var eventAdd = [];
            for (var i = 0; i < event.length; i++) {
                var str = "<tr class='table-expand-row' data-open-details><td>"
                    + event[i].eventDate + "</td><td>"
                    + event[i].eventName + "</td><td>"
                    + event[i].eventLocation + "</td>";
                var found = false;
                for (var j = 0; j < reglist.Events.length; j++) {
                    if (event[i].id == reglist.Events[j].id){ 
                        found = true;
                        break;
                    }
            }
            if (found) {
             str += "<td>already registered</td>" 
            }
            else{
                str += "<td>" + "<button data-eventId='" + event[i].id + "' class='button eventSignup' onClick='window.location.reload();'> Sign Up </button></tr>"
                }
            str += "<tr class='table-expand-row-content'>"
                + "<td colspan='8' class='table-expand-row-nested'><p>"
                + event[i].eventDescription + "</td></tr>"

            eventAdd.push(str)
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

function refreshPage(){
    window.location.reload();
}