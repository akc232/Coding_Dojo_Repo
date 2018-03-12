// function acceptAndReturn(){
//    return value
// }
// var value = "a stored string"
// console.log(acceptAndReturn(value))

// function counter(){
//    for( i = 1;i<5;i++){
//       console.log(i)
//    }
// }
// counter()


function counter(){
   var count = 0;
   function counterChild(){
      return ++count;
   }
   return counterChild;
}
counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
