// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const changeDevouredBtns = document.querySelectorAll(".change-devoured");

  // Set up the event listener for the create button
  if (changeDevouredBtns) {
    changeDevouredBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const newDevoured = e.target.getAttribute("data-newdevoured");

        const newDevouredState = {
          devoured: newDevoured,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newDevouredState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`Changed devoured to: ${newDevoured}`);
            location.reload("/");
          } else {
            alert("Something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "bu"
      const newBurger = {
        name: document.getElementById("bu").value.trim(),
        devoured: document.getElementById("devoured").checked,
      };
      if (newBurger.name.length > 0) {
        // Send POST request to create a new burger
        fetch("/api/burgers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById("bu").value = "";

          // Reload the page so the user can see the new burger
          console.log("Created a new burger!");
          location.reload();
        });
      }
    });
  }

  // DELETE
  const deleteBurgerBtns = document.querySelectorAll(".delete-burger");

  // Set up the event listeners for each delete button
  deleteBurgerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
