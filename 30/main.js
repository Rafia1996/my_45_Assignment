// Array of usernames
var usernames = ["admin", "shoaib", "rida", "yahya", "nabila"];
// Loop through the array and print greetings
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
