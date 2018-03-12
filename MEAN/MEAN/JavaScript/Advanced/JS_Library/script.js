function each(arr, callback) {

  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

var arr = [1,2,3,4,5,6]
function map(arr, callback){
   var results = []
   each(arr, function(element, index) {
    results.push(callback(element, index));
  });
  console.log(results);
  return results;
};
function reduce(arr, callback, memo){
   if(!memo){
      memo=0;
   }
   each(arr, function(element, index) {
   memo = (callback(element,memo, index));
  });
  console.log(memo);
  return memo;
};

function find(array, callback){
   results = [];
   for  (var i=0;i<arr.length;i++){
      if (callback(array[i], i)){
         results.push(array[i]);
      }
   }
   console.log(results);
   return results;
}

function filter(array, callback){
   var results = [];

  each(array, function(element) {
    if (callback(element)) {
      results.push(element);
    }
 })
 console.log(results);
 return results
};

function reject(array, callback){
   var results = [];

  each(array, function(element){
    if (!callback(element)){
      results.push(element);
    }
  });
  console.log(results);
  return results;

}



// var _ = {
//    map: function map(arr, callback) {
//     for (var i =0;i<arr.length;i++){
//       console.log(arr[i]);
//    }
//    },
//    reduce: function() {
//      // code here;
//    },
//    find: function() {
//      // code here;
//    },
//    filter: function() {
//      // code here;
//    },
//    reject: function() {
//      // code here;
//    }
//  }
// // you just created a library with 5 methods

map([1,2,3,4,5,6], function(num){return num*3});
reduce([1,2,3,4,5,6], function(memo,num){return memo + num});
find([1,2,3,4,5,6], function(num){return num > 2});
filter([1,2,3,4,5,6], function(num){return num % 2 == 0;});
reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
