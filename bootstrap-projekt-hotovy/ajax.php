<?php
header('Access-Control-Allow-Origin: *'); 

$name = htmlspecialchars($_GET['name']);
$email = htmlspecialchars($_GET['email']);
$phone = htmlspecialchars($_GET['phone']);
$date = htmlspecialchars($_GET['date']);

$str = 'Name: <strong>'.$name.'</strong><br>';
$str .= 'Email: <strong>'.$email.'</strong><br>';
$str .= 'Phone: <strong>'.$phone.'</strong><br>';
$str .= 'Date: <strong>'.$date.'</strong><br>';

echo $str;

?>