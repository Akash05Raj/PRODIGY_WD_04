<?php

    $conn = mysqli_connect('localhost','root','','portfoliodata');
    if(!$conn){
        die("Connection Error".mysqli_connect_error());
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mno'];
    $emailsubject = $_POST['email-subject'];
    $message = $_POST['message'];
    // echo $name.$email.$emailsubject.$message;
    
    
    // echo 'Connection Successfully';
    $query = "INSERT INTO `emaildata` (`id`, `name`, `email`,`mobileno`, `subject`, `message`, `created`) VALUES (NULL,'$name' ,'$email' ,'$mobile','$emailsubject' ,'$message' , current_timestamp())";
    $data = mysqli_query($conn,$query);
    
    if($data){
     echo $data;   
    }
    mysqli_close($conn);


?>