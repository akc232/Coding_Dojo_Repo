var mathlib = require("./math");
var math = new mathlib();

num1 = 5;
num2 = 12;

console.log("adding:",math.add(num1,num2));
console.log("multiply:", math.multiply(num1,num2));
console.log("square:", math.square(num1));
console.log("random:", math.random(num1,num2));
