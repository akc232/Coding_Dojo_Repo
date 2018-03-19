<!--Display a drop-down menu in HTML (using select tag and option tag) that displays the different states. Create this drop-down menu using for loops. Create another identical drop-down menu but, this time, use foreach statement.

Once you're done with the above exercise, insert three new states in the array $states: 'NJ', 'NY', 'DE'. Display a new drop-down menu with the eight unique states.

Your output should have three drop-down menus.  -->


<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title>Display States Array</title>
   </head>
   <body>
<?php $states = array('IL', 'CO', 'AZ', 'WA', 'CA', 'OR'); ?>
   <select >
      <?php foreach ($states as $state ) { ?>
      <option><?= $state ?></option>
      <?php } ?>
   </select>
   <select >
      <?php for ($i = 0; $i < count($states);$i++ ) { ?>
      <option><?= $states[$i] ?></option>
      <?php } ?>
   </select>
   <select >
      <?php array_push($states, "NY", "WI", "PA") ?>
      <?php foreach ($states as $state ) { ?>
      <option><?= $state ?></option>
      <?php } ?>
   </select>
   </body>
</html>
