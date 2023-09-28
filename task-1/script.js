document.addEventListener("DOMContentLoaded", function () {
  // Get the login form and its elements
  const loginForm = document.querySelector("form");
  const emailOrPhoneInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const showPasswordButton = document.querySelector(".show");

  // Function to validate the form
  function validateForm() {
    let valid = true;

    // Validate email/phone field (not empty)
    if (emailOrPhoneInput.value.trim() === "") {
      valid = false;
      alert("Email or phone field cannot be empty.");
    }

    // Validate password (minimum length)
    if (passwordInput.value.length < 8) {
      valid = false;
      alert("Password must be at least 8 characters long.");
    }

    return valid;
  }

  // Function to toggle password visibility
  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  // Event listener for form submission
  loginForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  // Event listener for the "Show" button
  showPasswordButton.addEventListener("click", function () {
    togglePasswordVisibility();
  });
});
