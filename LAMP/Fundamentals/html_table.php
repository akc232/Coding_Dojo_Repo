<!-- Create a program that outputs a beautiful HTML table like this:

User #	First Name	Last Name	Full Name	Full Name in upper case	Length of full name (without spaces)
1	Michael	Choi	Michael Choi	MICHAEL CHOI	11
2	John	Supsupin	John Supsupin	JOHN SUPSUPIN	12
3	Mark	Guillen	Mark Guillen	MARK GUILLEN	11
Make sure that the length of the name comes out to be 11, 12, 11. Hint: You may need to use a PHP function called trim().
 -->


<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title></title>
   </head>
   <?php $users = array(
   array('first_name' => 'Michael', 'last_name' => 'Choi'),
   array('first_name' => 'John', 'last_name' => 'Supsupin'),
   array('first_name' => 'Mark', 'last_name' => 'Guillen'),
   array('first_name' => 'KB', 'last_name' => 'Tonel')
); ?>
   <body>
      <table class="table-bordered">
         <thead>
            <th>User #</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>Full UPPERCASE</th>
            <th>Length(no spaces)</th>
         </thead>
         <tbody>
<?php foreach ($users as $person => $person_info) { ?>
         <tr>
            <td><?=$person+1?></td>
            <td><?=$person_info['first_name']?></td>
            <td><?=$person_info['last_name']?></td>
            <td><?=$person_info['first_name']?> <?=$person_info['last_name']?></td>
            <td><?=strtoupper($person_info['first_name'])?> <?=strtoupper($person_info['last_name'])?></td>
<?php $length = trim(strlen($person_info['first_name'])) + trim(strlen($person_info['last_name']))?>
            <td><?=$length?></td>
         </tr>
<?php } ?>
         </tbody>
      </table>
   </body>
</html>
