document.addEventListener("DOMContentLoaded", function() {
    // Get the login button element by its ID
    var loginButton = document.getElementById("loginButton");

    // Add a click event listener to the login button
    loginButton.addEventListener("click", function() {
        // Create an audio element
        var loginSound = new Audio("soundfx/pizzapower.wav");
        
        // Play the login sound when the button is clicked
        loginSound.play();
    });
});
