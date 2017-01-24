function game(slots) {

var chance=0;
var q= Math.trunc(Math.random()*99);
var win=0;

for( var game = q; game>0;game--){
  chance= Math.trunc(Math.random()*100);
  win=game;
  if (q>0 && chance===1){
    console.log("You win!" + "You now have" + (q+win) + "quarters left");
    break;
  }

  else if( q= q-1 )
  console.log("You lose. You have" + q+ "quarters left");
}


}
game()
