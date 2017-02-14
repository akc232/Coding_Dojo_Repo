function biggie(arr) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > 0) {
         arr[i] = "big";
      }
   }
console.log(arr);
}
biggie([-1, 3, 5, -5])
