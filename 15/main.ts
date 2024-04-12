let Guestlists : string[] = ["Rafia","Rida", "Yahya","Hira"];
var dontcomes = Guestlists[0];
console.log(dontcomes , "nhn aa raha");
Guestlists.splice(0, 1, "amir");
Guestlists.forEach(guest => console.log(`salam ${guest} , would you like?`));