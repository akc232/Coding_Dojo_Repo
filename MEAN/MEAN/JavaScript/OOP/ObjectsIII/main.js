function VehicleConstructor(name, wheels, passengers){

   this.name = name;
   this.wheels = wheels;
   this.passengers = passengers;
   console.log("Name: "+this.name+", Wheels: "+this.wheels+", Passengers: "+this.passengers);
   this.makeNoise = makeNoise;
   function makeNoise(noise){
      console.log(noise);
   };
   people = 0;
   this.pickUp = pickUp;
   function pickUp(pick){

      people += pick;
      console.log("People: "+people);
      return pickUp
      }
   var distance_traveled = 0;
   distance_traveled.speed = updateDistanceTraveled;
   function updateDistanceTraveled(speed){
      distance_traveled+= speed;
      console.log(distance_traveled);
      return updateDistanceTraveled
   };
   this.move = moveVehicle;
   function moveVehicle(e,noise){
      updateDistanceTraveled(e);
      makeNoise(noise);
      return moveVehicle
   }
   this.checkMiles = checkMiles;
   function checkMiles(){
      console.log("Total Miles Logged: "+ distance_traveled);
   }

   return this;
}
var evo = new VehicleConstructor("evo", 4, 4);
evo.makeNoise("Beep Beep");

// ---------------------------------------ObjectsII-------
evo.move(10,"beep");
evo.move(10,"beep");
evo.checkMiles();

// ---------------------------------------ObjectsIII-------


evo.VIN= Math.floor(Math.random()*1000000000000)
console.log(evo.VIN);




// var bike = new VehicleConstructor("Bike", 2, 1);
// bike.makeNoise("Ring Ring");
// var sedan = new VehicleConstructor("Sedan", 4, 5);
// sedan.makeNoise("Honk Honk");
// var bus = new VehicleConstructor("Bus", 12, 0);
// bus.pickUp(25);
// bus.pickUp(25);
// bus.pickUp(25);
// bus.pickUp(25);
