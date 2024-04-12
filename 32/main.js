// Make a list of current users
var current_users = ["owais", "tabeer", "wasay", "rafia", "samad"];
// Make a list of new users
var new_users = ["RAFIA", "Rida", "yahya", "Hira", "javed"];
// Function to check if a username exists
function isUsernameTaken(username) {
    var lowercaseUsername = username.toLowerCase();
    return current_users.some(function (user) { return user.toLowerCase() === lowercaseUsername; });
}
// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    // Check if the new username has already been used
    if (isUsernameTaken(user)) {
        console.log("Sorry, the username \"".concat(user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(user, "\" is available."));
    }
}
