<?php

// Part 1: Create a function called 'multiply()' that reads each value in an array (e.g. $A = array(2, 4, 10, 16)) and returns a new array where each value has been multiplied by 5.

// Part 2: Modify this function so that you can pass an additional argument to this function. The function should multiply each value in the array by this additional argument (call this additional argument 'factor' inside the function). For example say $A = array(2,4,10,16). When you say...


function multiply($num, $multiple){
   $new_array= array();
   foreach ($num as $number) {
      array_push($new_array, $number * $multiple);
   }
   return $new_array;
}

$arr = array(2,4,6,8);
$print = multiply($arr, 11);
var_dump($print);
 ?>
