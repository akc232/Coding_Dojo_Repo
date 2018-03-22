<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <title></title>
   </head>
   <body>
      <div class="main">
         <div class="survey">
            <form action="result.php" method="post">
               <label>First Name: </label> <?= $_POST['first_name'] ?> <br>
               <label>Dojo: </label> <?= $_POST['dojo'] ?> <br>
               <label>Favorite Language: </label> <?= $_POST['language'] ?> <br>
               <label>Comment: </label> <?= $_POST['comment'] ?> <br>
               <button type="submit" class="button">Submit</button>
            </form>
         </div>
      </div>
   </body>
</html>
