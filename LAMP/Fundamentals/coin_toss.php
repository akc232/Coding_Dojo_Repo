<?php
// You're going to create a program that simulates throwing a coin 5,000 times. Your program should display how many times the head/tail appears.
function coin_flip(){
   $count = 1;
   $heads = 0;
   $tails = 0;

   for( $i = 0; $i <100; $i++){
      $rand = rand(1,2);
      if($rand == 1){
         $heads += 1;
         echo "Atempt:" . $count . " . Got Heads!! Total:" .$heads. " head(s), and ".$tails. "tails(s). <br>";
         $count +=1;
      }else{
         $tails += 1;
         echo "Atempt:" . $count . " . Got Tails!! Total: " .$heads. " head(s), and ".$tails. "tails(s).<br>";
         $count +=1;
      }
   }
   echo "Total Heads" . $heads. "<br>";
   echo "Total Tails" . $tails. "<br>";
   echo "End Program, Thanks!!";
}

coin_flip()




 ?>
