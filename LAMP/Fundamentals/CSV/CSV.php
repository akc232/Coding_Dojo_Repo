<?php
ini_set('auto_detect_line_endings', true);
$csv_open = fopen("us-500.csv", "r");
$get = getcsv($csv_open);
var_dump($get);



 ?>
