//Contact Form in PHP
<?php
  $fname = htmlspecialchars($_POST['fname']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

?>