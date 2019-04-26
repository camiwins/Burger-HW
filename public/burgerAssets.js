$(function () {
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");
        console.log("you clicked delete");
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});

$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("added");

        var newBurger = {
            burgerName: $("#burger").val().trim(),
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );

    });
});

$(function () {
    $(".change-devoured").on("click", function (event) {

        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            isDevoured: newDevoured
        };

        console.log("you clicked devoured!");
        console.log("=========");
        console.log("burger id: " + id);
        console.log("burger newDevoured: " + newDevoured);
        console.log("burger newDevoured: " + newDevouredState.isDevoured);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to ", newDevoured);
                location.reload();
            }
        );
    });
});