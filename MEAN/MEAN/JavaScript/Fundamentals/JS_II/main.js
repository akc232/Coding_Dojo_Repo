// function integer(x,y){
//    if( x < y){
//       sum= ((y-x)+1) *((x+y)/2);
//       console.log(sum);
//    }
//    else{
//    sum= ((x-y)+1) *((x+y)/2);
//    console.log(sum);
//    }
// }
// integer(2,4)

function forXY(x,y){
   // x must be greater than y..
   sum=0;
   for(i = x;i<y+1;i++){
         sum+=i;
      }
      console.log(sum);

}
forXY(2,4)

function minimum(arr){
   var min = arr[0]
   for( var i =1;i<arr.length;i++){
      if(arr[i]< min){
         min = arr[i]
      }
   }
   console.log(min);
}
minimum([1, 5, 90, 25, -3, 0])

function average(arr){
   var avg=0
   for( var i =1;i<arr.length;i++){
      avg= avg+arr[i];
   }
   console.log(avg/arr.length);
}
average([1, 5, 90, 25, -3, 0])

var person = {
   name: "Andrew",
   distance_traveled: 0,
   say_name: function(){
      return this.name;
   },
   say_something: function(){
      return this.name+ " says I am cool!";
   },
   walk: function(){
      this.distance_traveled+=3

      return this.name+ " is walking - "+this.distance_traveled;
   },
   run: function(){
      this.distance_traveled+=10
      return this.name+ " is running - "+this.distance_traveled;
   },
   crawl: function(){
      this.distance_traveled+=1
      return this.name+ " is crawling - "+this.distance_traveled;
   },
   grab: function(){
      return('${person.name}+" picked up a quater off the ground! "');

   }

}
console.log(person.say_name());
console.log(person.say_something());
console.log(person.walk());
console.log(person.run());
console.log(person.crawl());
console.log(person.grab());
