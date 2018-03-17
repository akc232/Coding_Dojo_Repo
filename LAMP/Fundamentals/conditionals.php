<?php
// $subject = "English";
// var_dump($subject == "Math");

// $subject = "Math";
//
// if($subject == "Math"){
//    echo "The subject is Math";
// } else{
//    echo "The subjcet is English";
// }

$first_name = "";
$roles = array("Owner", "Member", "Guest");
$role = 0;

switch($first_name){
   case "Andrew":
   $role = 0;
   break;
   case "John":
   $role = 1;
   break;
   case "":
   $first_name = "Guest";
   $role = 2;
   break;
}
echo "Hello " .$first_name. ", you are a " .$roles[$role]. "."

 ?>
