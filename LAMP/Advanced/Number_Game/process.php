<?php
session_start();

if(!isset($_SESSION['number'])){
   $_SESSION['number'] = rand(1,5);
}

if(!empty($_GET) && isset($_GET['guess'])){
   if( $_GET['guess'] == $_SESSION['number']){
      $_SESSION['result'] = "correct";
   } elseif( $_GET['guess'] < $_SESSION['number']){
      $_SESSION['result'] = "low";
   } else {
      $_SESSION['result'] = "high";
   }
   header('location: index.php');
   exit();
}
if (!empty($_GET) && isset($_GET['reset'])){
    session_destroy();
  header('location: index.php');
  exit();
}

 ?>
