<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test1";
try {
 $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 echo "Connected successfully <br />";
}
catch(PDOException $e)
{
 echo "Connection failed: " . $e->getMessage();
}
$query=$conn->prepare("INSERT INTO contacts (fname, email, phone, message) VALUES (?,?,?,?)");
$query->bindParam(1, $fname);
$query->bindParam(2, $email);
$query->bindParam(3, $phone);
$query->bindParam(4, $message);
$fname=$_POST['fname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
$query->execute();
$conn = null;
echo 'Hi '.$_POST['fname'].' thanks for your interest.</br>';
echo 'We will contact you at '. $_POST['email'].' soon.</br>';
?>

