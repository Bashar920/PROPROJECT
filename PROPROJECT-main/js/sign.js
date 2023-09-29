function validateForm() {
    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the fields are empty
    if (username === "" || password === "") {
        alert("Both username and password are required.");
        return false; // Prevent form submission
    }
}