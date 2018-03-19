<!-- Create a function called 'print_lists' that takes any array and prints each value in the array in an <li>, which is part of a <ul>. For example, running print_lists($A) where $A = array(2,3,'hello'); should output a html response that looks like... -->
<?php
function print_list($array){
   foreach($array as $num){
      echo "<ul><li>". $num . "</li></ul>";
   }
}
$list = array("Hello",23, "Bye", 41);
$print = print_list($list);
echo $print;

 ?>
