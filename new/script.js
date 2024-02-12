document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // You would typically send a request to the server here to check the credentials.
        // If the credentials are valid, you can redirect the user to the index page.
        // For this example, we'll simulate a successful login by redirecting to index.html.
        window.location.href = "main.html";
    });

    registerForm.addEventListener("register", function(event) {
        event.preventDefault();

        // You would typically send a request to the server here to create a new user account.
        // After successfully registering the user, you can redirect them to the index page.
        // For this example, we'll simulate a successful registration by redirecting to index.html.
        window.location.href = "index.html";
    });
});
