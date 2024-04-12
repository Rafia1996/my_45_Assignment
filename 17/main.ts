let guestlist  =  ["rafia", "rida", "yahya", "hira"]
let dontcome = guestlist[0];
console.log(dontcome, "nhn aa sakta");
guestlist.splice(0,1,"Javed");
console.log("we found a biggest table for dinner with me!");
guestlist.unshift("owais");
guestlist.push("insha emaan");
let guestlistlenght: bigint[];
let middleindex : number = Math.floor(guestlist.length/2);
guestlist.splice(middleindex ,0,"inza emaan");
guestlist.forEach(guest => console.log(`salam ${guest} would you like to come`));

console.log("unfortunatily , the new table is not arrive only two members is dinner with me");
while (guestlist.length>2);
let removedguest  = guestlist.pop();
console.log(`sorry , ${removedguest} i canot invite you`);
guestlist.forEach(lasttwo => console.log(`lucky ${lasttwo},  you are still invited`));

guestlist.pop();
guestlist.pop();
console.log(`empty list!`, guestlist);
