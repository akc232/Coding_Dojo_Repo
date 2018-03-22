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
               <label>Your Name:</label>
               <input type="text" name="first_name" value=""><br>
               <label>Dojo Location:</label>
               <select name='dojo' >
         <?php $dojos = array("Chicago", "New York", "LA", "Seattle") ?>
         <?php foreach ($dojos as $dojo) { ?>
                  <option selected=selected><?= $dojo ?></option>
         <?php }  ?>
               </select><br>
               <label>Favorite Language:</label>
               <select name='language' >
         <?php $languages = array("Python", "Java SCript", "PHP", "Ruby") ?>
         <?php foreach ($languages as $language) { ?>
                  <option selected=selected><?= $language ?></option>
         <?php }  ?>
               </select><br>
               <label>Comment: </label><br>
               <textarea name="comment" rows="4" cols="40"></textarea><br>
               <button type="submit" class="button">Submit</button>
            </form>
         </div>
      </div>
   </body>
</html>
