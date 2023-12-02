<html>
<body>
Your report is complete! If you have used IFWI-1 on multiple chromebooks, please submit reports for all of them that you haven't. Thank you for your time. This will greatly be appreciated by IFWI.
<?php $number = $_POST["number"]; ?>
<?php $classroom = $_POST["classroom"]; ?>
<?php $version = $_POST["version"]; ?>
<?php 
date_default_timezone_set('America/Los_Angeles');
$date = date('m:d:Y');
$time = date("H:i:s");
$report = "Number: " . $number . " | Classroom: " . $classroom . " | Version: " . $version . " | Timestamp: " . $date  . " ". $time;
$filename = 'report.txt';
$file = fopen($filename, 'a');
$report = "\n" . $report;
fwrite($file, $report);
fclose($file);
?>
</body>
</html> 