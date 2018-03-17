<?php
// for($i = 0; $i < 10; $i++){
//    echo $i. "<br>";
//    for($j = 0; $j < 5; $j++){
//       echo $j;
//    }
//    echo '<br>';
// }
// outputs a loop with in a loop.
// $people = array(
//                array("Andrew", "Chang", 27),
//                array("John", "Doe", 25),
//                array("Bill", "Thornton", 33)
//             );
// for($i = 0; $i < count($people); $i++)
// {
//    for($s = 0; $s < count($people[$i]); $s++)
//    {
//       echo $people[$i][$s]. ' ';
//    }
//    echo '<br>';
// }
// for loop that looks through arrays 0-2, then loops through individual items in the array ie. "Andrew", "Chang"



// $people = array(
//                array("first_name" => "Andrew", "last_name" => "Chang", "age" => 27),
//                array("first_name" =>"John", "last_name" => "Doe", "age" => 25),
//                array("first_name" =>"Bill", "last_name" => "Thornton", "age"=> 33)
//             );
// foreach ($people as $row)
// {
//    foreach ($row as $info => $value)
//    {
//       echo $info. ' = ' .$value. ' ';
//    }
//    echo "<br>";
// }
// foreach loop allows looping through arrays with variables


//while - loops through a block of code in a specified number of times.
// $i = 0;
// while ($i < 10)
// {
//    echo $i;
//    $i++;
//
// }



//do....while - loops through a block of code once, and then repeats the loop as long as a special condition is true.
$i = 0;
do {
   echo $i. '<br>';
   $i++;
} while ($i <= 15);


 ?>
