// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/smoothies/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSmoothie = {
      smoothieName: $("#ca").val().trim(),
      devoured: $("[smoothieName=devoured]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/smoothies", {
      type: "POST",
      data: newSmoothie
    }).then(
      function() {
        console.log("Smoothie has been created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }); 
});
