document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formStatus = contactForm.querySelector(".form-status");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Display a loading message while processing the form
    formStatus.textContent = "Sending...";

    // Create a new FormData object from the form
    const formData = new FormData(contactForm);

    // Send a POST request to the form's action URL using Fetch API
    fetch(contactForm.action, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        // Check the response status
        if (response.ok) {
          // Redirect to thankyou.html upon successful submission
          window.location.href = "thankyou.html";
        } else {
          // Show error message
          formStatus.textContent = "Failed to send message. Please try again.";
          formStatus.classList.add("error");
        }
      })
      .catch(function (error) {
        // Show error message
        formStatus.textContent = "An error occurred. Please try again later.";
        formStatus.classList.add("error");
      });
  });
});
