// Exercise 28 - Greetings with if test for empty user list
// Define an array of names
var names = ["javed", "owais", "samad", "admin", "yahya"];
names = [];
// Check if the list of users is not empty
if (names.length > 0) {
    console.log("We need to find some users!");
}
else {
    names.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("hello ".concat(oneuser, " , would you like to see status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thankyou for logging in again."));
        }
    });
}
