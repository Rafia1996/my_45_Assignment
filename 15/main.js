var Guestlist = ["Rafia", "Rida", "Yahya", "Hira"];
var dontcome = Guestlist[0];
console.log(dontcome, "nhn aa raha");
Guestlist.splice(0, 1, "amir");
Guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, " , would you like?")); });
