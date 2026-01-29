const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmValid) {
        e.preventDefault();
    }
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
        return false;
    } else {
        showSuccess(nameInput);
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailInput.value.match(emailPattern)) {
        showError(emailInput, "Enter valid email");
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    } else {
        showSuccess(confirmPasswordInput);
        return true;
    }
}
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);
