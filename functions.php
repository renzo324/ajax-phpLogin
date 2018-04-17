<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "phplogin";
$conn = new mysqli($servername, $username, $password,$dbname);


if($_GET){
if($_GET['function']=='getUsers') getUsers();
if($_GET['function']=='addUser') addUser();
if($_GET['function']=='deleteUser') deleteUser($_GET['id']);
if($_GET['function']=='editUser') editUser($_GET['id']);
}

function getUsers(){
$sql = "SELECT * FROM `users`";
$result = $GLOBALS['conn']->query($sql);
if ($result->num_rows > 0) {
	$resp = '[';
    while($row = $result->fetch_assoc()) {
        $resp .= '{"id" : '.'"'.$row['id'].'",';
        $resp .= '"fname" : '.'"'.$row['fname'].'",';
        $resp .= '"lname" : '.'"'.$row['lname'].'"},';
    }
    $resp .= ']';
    $resp = str_replace(',]',']',$resp);
    echo $resp;
}
}

function addUser(){
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$password=$_POST['password'];
$number=$_POST['number'];

$sql = "INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `number`) VALUES (NULL, '".$fname."', '".$lname."', '".$email."', MD5('".$password."'), '".$number."');";
$result = $GLOBALS['conn']->query($sql);
}

function deleteUser($id){
	$sql = "DELETE FROM `users` WHERE `id` = ".$id."";
	$resul = $GLOBALS['conn']->query($sql);
}
function editUser($id){
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$password=$_POST['password'];
$number=$_POST['number'];

$sql = "UPDATE `users` set `fname`='".$fname."', `lname`='".$lname."', `email`='".$email."', `password`='".$password."', `number`='".$number."' WHERE `id`=".$id."";
$result = $GLOBALS['conn']->query($sql);
}
?>