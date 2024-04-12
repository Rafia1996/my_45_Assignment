// Exercise 28 - Greetings with if test for empty user list

// Define an array of names
let names: string[] = ["javed", "owais", "samad", "admin", "yahya"];

names=[]

// Check if the list of users is not empty
if (names.length > 0) {
   console.log("We need to find some users!"); 
}
else {
    names.forEach(oneuser => {
        if(oneuser === "admin") {
            console.log(`hello ${oneuser} , would you like to see status report?`);
        }
        else{
     console.log(`hello ${oneuser}, thankyou for logging in again.`);
        }
    })
}

