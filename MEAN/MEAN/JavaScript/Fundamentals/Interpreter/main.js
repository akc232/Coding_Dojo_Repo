firstFunc()
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
// -----------------------------------------
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
food="Chicken"
console.log(food);
eat();
// ----------------------------
lastFunc()
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
  console.log(new_word);
}
console.log(new_word);
