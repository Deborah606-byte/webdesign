<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dapssearch";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully <br />";
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

if(isset($_POST['save_checkbox']))
{
    $fname = $_POST['fname'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone  = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    $checkbox = $_POST['checkbox'] ?? '';  

    $query = $conn->prepare("INSERT INTO contacts (fname,email,phone,message,checkbox) VALUES ('$fname','$email','$phone','$message','$checkbox')");
    $query_run = $query->execute();

    $conn = null;

           
}

    if(isset($_POST['fname']) && isset($_POST['email'])) {
        $message = "Hi, {$_POST['fname']} thanks for the message. We will contact you at {$_POST['email']} soon.";
        echo json_encode(array("message" => $message));
    }
?>


