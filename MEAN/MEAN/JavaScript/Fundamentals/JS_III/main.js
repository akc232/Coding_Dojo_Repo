var person = {
   name: "Andrew",
   distance_traveled: 0,
   say_name: function(){
      return person.name;
   },
   say_something: function(){
      return person.name+ " says I am cool!";
   },
   walk: function(){
      person.distance_traveled+=3

      return person.name+ " is walking - "+person.distance_traveled;
   },
   run: function(){
      person.distance_traveled+=10
      return person.name+ " is running - "+person.distance_traveled;
   },
   crawl: function(){
      person.distance_traveled+=1
      return person.name+ " is crawling - "+person.distance_traveled;
   },

}
console.log(person.say_name());
console.log(person.say_something());
console.log(person.walk());
console.log(person.run());
console.log(person.crawl());



// need to finish this part of the assignment...

// function personConstructor(name, location){
//    var person ={}
//    belt = ["yellow","red","black"]
//    person.name= name;
//    person.cohort= location;
//    person.belt = belt[0]
//    person.beltLevel= 0;
//
//    person.levelUp = function(){
//       if(person.beltLevel<3){
//          person.beltLevel+=1;
//          person.belt= belt[person.beltLevel];
//          console.log("level up!");
//       }
//
//    }
//
// }
// var person1 = new personConstructor("Andrew", "Chicago");
// person1.levelUp()
// var person1 = new personConstructor("JOhn", "Seattle");
