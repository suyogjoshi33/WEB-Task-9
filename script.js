const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
});

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error-field";
    formGroup.querySelector(".error").innerText = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    formGroup.querySelector(".error").innerText = "";
}

function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
    } else {
        showSuccess(nameInput);
    }
}

function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        showError(emailInput, "Enter valid email");
    } else {
        showSuccess(emailInput);
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
    } else {
        showSuccess(passwordInput);
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
    } else {
        showSuccess(confirmPasswordInput);
    }
}
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);
