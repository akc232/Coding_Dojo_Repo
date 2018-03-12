var x =[3,5,"Dojo", "rocks", "Michael", "Sensei"]
var x2 = ["hello", "world", "JavaScript is Fun"]
   for( var i = 0; i< x.length;i++){
      console.log(x[i]);
   }
   x.push("100")
   x.push(x2)
   console.log(x);

var sum = 0
for(var i = 0;i<501;i++){
   sum+=i
}
console.log(sum);


var arr = [1, 5, 90, 25, -3, 0]

var min = arr[0]
for( var i =1;i<arr.length;i++){
   if(arr[i]< min){
      min = arr[i]
   }
}
console.log(min);

var avg=0
for( var i =1;i<arr.length;i++){
   avg= avg+arr[i]
}
console.log(avg/arr.length);

var newNinja = {
 name: 'Andrew',
 profession: 'coder',
 favorite_language: 'Python',
 dojo: 'Chicago',
 }

 for (item in newNinja){
    console.log(newNinja[item]);
}
