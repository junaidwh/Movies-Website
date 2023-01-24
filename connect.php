<?php
if(["submit"]==true){
$Name = $_POST["name1"];
$email = $_POST["email"];
$password = $_POST["passwor"];
$mobileno = $_POST["numb"];
$country = $_POST["country"];
$gender = $_POST["gender"];

        if($Name  && $email && $password && $mobileno){
    $conn = mysqli_connect("localhost","root","","finalproject");

    $db_conn = "Insert into junaid (name1, email, passwor, numb, country,gender) VALUES('$Name','$email', '$password','$mobileno','$country','gender') ";
    $result = mysqli_query($conn, $db_conn);
    
    if ($result) {
        echo("DATA SAVED!");
}
else{
    echo("ERROR!");
}
}
else{
    header('location: register.html');
}
}

?>