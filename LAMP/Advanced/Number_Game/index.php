<?php
session_start();

// This game was made for practice using PHP and sesssion to pass information, minimal CSS and UX was used.
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Number Game</title>
   </head>
   <body>
   <div class="main">
      <div class="header">
         <h1>Welcome to the Number Game</h1>
         <h3>Directions: Guess the number (1-5), and get it right and you win at... guessing.</h3>
      </div>
      <div class="flash_guess">
<?php if(isset($_SESSION['result'])){
            if($_SESSION['result'] == 'low'){?>
               <div class="low_guess">
                  <h4>Guess is to low!</h4>
                  <p><?=$_SESSION['number']?></p>
               </div>
         <?php } elseif($_SESSION['result'] == 'high'){?>
               <div class="high_guess">
                  <h4>Guess is to high!</h4>
                  <p><?=$_SESSION['number']?></p>
               </div>
         <?php } else{ ?>
            <div class="correct">
               <h4> <?= $_SESSION['number']?> is the correct number!! You win!</h4>
               <form  action="process.php">
                  <input type="hidden" name="reset" value="true">
                  <button type="submit"> Restart </button>
               </form>
               <p><?=$_SESSION['number']?></p>
            </div>
         <?php } ?>
<?php }?>
      </div>
      <div class="form_group">
         <form class="form_guess" action="process.php">
            <input type="text" name="guess" value=""><br>
            <button type="submit">Submit</button>
         </form>
      </div>
   </div>
   </body>
</html>
