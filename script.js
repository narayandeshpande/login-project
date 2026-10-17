const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (password.length < 6) {
        showMessage(
            "Password must contain at least 6 characters.",
            "error"
        );
        return;
    }

    // Frontend demo only: no real authentication is performed.
    showMessage(
        "Form validated successfully! Connect a backend to log in.",
        "success"
    );
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    showMessage(
        "Password reset is not configured in this demo.",
        "error"
    );
});

document.getElementById("signupLink").addEventListener("click", function (event) {
    event.preventDefault();
    showMessage(
        "Sign-up functionality can be added next.",
        "success"
    );
});

function showMessage(text, type) {
    message.textContent = text;
    message.style.color = type === "success" ? "#218838" : "#d93025";
}