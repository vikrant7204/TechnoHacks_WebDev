document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Reset error messages
      clearErrorMessages();
  
      // Validate each input field
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      if (!validateName(firstName)) {
        showError("firstNameError", "Please enter a valid first name.");
      }
  
      if (!validateName(lastName)) {
        showError("lastNameError", "Please enter a valid last name.");
      }
  
      if (!validateEmail(email)) {
        showError("emailError", "Please enter a valid email address.");
      }
  
      if (!validatePassword(password)) {
        showError("passwordError", "Password must be at least 8 characters.");
      }
  
      if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
      }
  
      // If there are no errors, submit the form
      if (validateForm()) {
        form.submit();
      }
    });
  
    function validateName(name) {
      return /^[A-Za-z\s]+$/.test(name);
    }
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    function clearErrorMessages() {
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach((element) => {
        element.textContent = "";
      });
    }
  
    function showError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
    }
  
    function validateForm() {
      const errorElements = document.querySelectorAll(".error");
      let isValid = true;
  
      errorElements.forEach((element) => {
        if (element.textContent !== "") {
          isValid = false;
        }
      });
  
      return isValid;
    }
  });
  