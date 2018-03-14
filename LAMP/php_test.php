<?php
// $first_name = "Andrew";
// $last_name = "Chang";
// $num1 = 20;
// $num2 = 7;
// $num3 = 1;
// $age = ($num3 * $num2) + $num1;
//
// echo 'Hello, my name is ' .$first_name.' '.$last_name. '. I am '.$age. ' years old, and I want to be a freelance developer so I can live around the world.';
//----testing out variables ect ect ect.

//----testing out arrays in PHP
// $person = array();
//
// $person[] = "Andrew";
// $person[] = "Kevin";
// $person[] = "Sarah";
//
// echo "This is person 1:" .$person[1]. "<br>";
// echo "This is person 0:" .$person[0]. "<br>";
// echo "This is person 2:" .$person[2]. "<br>";

// Multi-dimentional array, plus concat.
$person = array(
   array("first_name" => "Andrew", "last_name" => "Chang" ),
   array("first_name" => "John", "last_name" => "Doe" ),
);
echo "Person number 1's first name is: " .$person[0]["first_name"]. ", and his last name is: ". $person[0]["last_name"]. "<br>";
echo "Person number 2's first name is: " .$person[1]["first_name"]. ", and his last name is: ". $person[1]["last_name"]. "<br>";

var_dump($person)

// array (size=2)
//   0 =>
//     array (size=2)
//       'first_name' => string 'Andrew' (length=6)
//       'last_name' => string 'Chang' (length=5)
//   1 =>
//     array (size=2)
//       'first_name' => string 'John' (length=4)
//       'last_name' => string 'Doe' (length=3)
 ?>
