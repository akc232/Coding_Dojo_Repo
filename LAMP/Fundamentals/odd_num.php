<?php
// printing out odd nums----------------
// for($i = 0; $i <=1000; $i++){
//    if($i % 3 == 0){
//       echo $i;
//    }
// }

//printing out multiples of 5------------
// for($i = 0; $i <= 10000; $i++){
//    if($i % 5 ==0){
//       echo $i. '<br>';
//    }
//
// }

// adds numbers in the array------------
// $numbers = array(1, 2, 5, 10, 255, 3);
// $sum =0;
// foreach ($numbers as $num) {
//    $sum += $num;
// }
// echo $sum;

// average of an array
// $numbers = array(1, 2, 5, 10, 255, 3);
// $sum =0;
// foreach ($numbers as $num) {
//    $sum += $num;
// }
// echo $sum / count($numbers);

// push variables to an array, then var_dump odd numbers
// $array = array();
// for ($i = 0; $i <= 20000; $i++){
//    if ($i % 2 == 1){
//       array_push($array, $i);
//    }
// }
// var_dump($array);

// Printing variables within a string.
// for ($i = 0; $i <=100; $i++){
//    if ($i % 2 ==1){
//       echo "Number " .$i. " is an Odd Number.";
//    } else {
//       echo "Number " .$i. " is an Even Number.";
//    }
//    echo '<br>';
// }

$x = array( array("hi"=>"Dojo", "game"=>"awesome"), array("dude"=>"fun", "play"=>"what?"), array("no"=>"way", "i am"=>"confused?") );
foreach($x as $y)
{
  foreach($y as $key=>$value)
  {
    echo $key ." - " . $value."<br />";
  }
}



 ?>
