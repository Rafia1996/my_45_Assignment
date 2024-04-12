var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruit = ["apple", "bnana", "orange"];
// equality and inequality
console.log("is apple equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
//lowercase function
console.log("converting to lowercase");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("not converting to lowercase");
console.log(uppercaseapple.toLowerCase() != "apple");
// nimerical testing
console.log("\n is ten equal to twenty?");
console.log(ten == twenty);
console.log("\n is ten not equal to twenty?");
console.log(ten != twenty);
//greater and less
console.log("\n is ten less then twenty?");
console.log(ten < twenty);
console.log("\n is ten is greater then twenty?");
console.log(ten > twenty);
//greater equal and less equal
console.log("\n is ten less then equal twenty?");
console.log(ten <= twenty);
console.log("\n is ten is greater then equal twenty?");
console.log(ten >= twenty);
// $ and or operator
console.log("\n twenty is not equal to 10 twenty is grater than 10");
console.log(twenty != ten && twenty >= ten);
console.log("\ntwenty is grater 50 or 20 equal 20 ");
console.log(20 > 50 || 20 == 20);
console.log("\ntwenty is grater 50 or 20 equal 20 ");
console.log(20 < 50 || 20 != 20);
//test weather
console.log("\n is orange include in fruit");
console.log(fruit.includes("orange"));
console.log("\n is orange not include in fruit");
console.log(!fruit.includes("orange"));
