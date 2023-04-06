<?php
$servername = "localhost";
$username = "root";
$password="";
$dbname="dapssearch";
try {
 $conn = new PDO("mysql:host=$servername;dbname=$dbname",
$username,$password);
 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 echo "Connected successfully <br />";
 }
catch(PDOException $e)
 {
 echo "Connection failed: " . $e->getMessage();
 }
$query=$conn->prepare("CREATE TABLE customer (fname varchar(15) NOT NULL ,email varchar(30) NOT NULL,phone int (15), message varchar(30) NOT NULL,PRIMARY
KEY (email),UNIQUE id (email),KEY id_2 (email))");
$query->execute();
$conn = null;
?>