// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newUser = {
            firstName: $("#fn").val().trim(),
            lastName: $("#ln").val().trim(),
            email: $("#em").val().trim(),
            address: $("#ad").val().trim(),
            phoneNum: $("#pn").val().trim(),
            age: $("#da").val().trim(),
            year: $("#cy").val().trim(),
            make: $("#cm").val().trim(),
            model: $("#cmo").val().trim(),
            color: $("#cc").val().trim()

        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("created new user");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
