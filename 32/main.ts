// Make a list of current users
let current_users: string[] = ["owais", "tabeer", "wasay", "rafia", "samad"];

// Make a list of new users
let new_users: string[] = ["RAFIA", "Rida", "yahya", "Hira", "javed"];

// Function to check if a username exists
function isUsernameTaken(username: string): boolean {
    let lowercaseUsername = username.toLowerCase();
    return current_users.some(user => user.toLowerCase() === lowercaseUsername);
}

// Loop through the new_users list
for (let user of new_users) {
    // Check if the new username has already been used
    if (isUsernameTaken(user)) {
        console.log(`Sorry, the username "${user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${user}" is available.`);
    }
}
