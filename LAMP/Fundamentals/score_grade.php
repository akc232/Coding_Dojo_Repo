// run random score function 100 times and print to html------
// Assignment: Score and Grade
//
// Use a rand() function to generate a random number between 50-100.
// Store the value returned from the above random function to a variable called $score
// Display the following grade depending on the score:
// Score below 70: display the score in h1 tag and display in h2 tag their grade: D
// Score between 70-80: display the score in h1 tag and display in h2 tag their grade: C
// Score between 80-90: display the score in h1 tag and display in h2 tag their grade: B; if someone got 80, give them a B
// Score between 90-100: display the score in h1 tag and display in h2 tag their grade: A; if someone got 90, give them an A
// For example, the output of your code would be something like below:
//
// Your Score: 81/100
// Your grade is B.
// IMPORTANT: After you make this work, use a for loop to generate your score/grade 100 times. In other words, after you run your PHP script, it should display the score and grade 100 times.
<?php
function score(){
   for($i = 1; $i <= 100; $i ++){
      $num = rand(50,100);
      echo $i;
      if( $num < 70 && $num >= 50){
         echo "<h1> Your Score is: "  . $num . "/100</h1>";
         echo "<h2> Grade: D</h2>";
      }elseif ($num > 70 && $num < 80) {
         echo "<h1> Your Score is: "  . $num . "/100</h1>";
         echo "<h2> Grade: C</h2>";
      }elseif ($num > 80 && $num < 90) {
         echo "<h1> Your Score is: "  . $num . "/100</h1>";
         echo "<h2> Grade: B</h2>";
      }elseif ($num > 90 && $num <= 100) {
         echo "<h1> Your Score is: "  . $num . "/100</h1>";
         echo "<h2> Grade: A</h2>";
      }
   }
}
score();
 ?>
