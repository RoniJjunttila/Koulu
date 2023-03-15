<?php
session_start ();

include ("connection.php");
include ("functions.php");

if ($_SERVER["REQUEST_METHOD"] == "POST")
{

    //jotakin postattiin
$user_name = $_POST["user_name"];
$password = $_POST["password"];

if (!empty($user_name) && !empty($password) && !is_numeric($user_name))
 {

// tallenna tietokantaan
$user_id = random_num(20);
$query = "insert into users (user_id,user_name,password) values ('$user_id','$user_name','$password')";
mysqli_query($con,$query);

header("Location:login.php");
die;
}else
{

echo "Käyttäjänimi ei voi olla numeerinen!";


}

}



?>