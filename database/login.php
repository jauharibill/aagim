<?php 
include "crud.php";
$control = new crud();
$username = $control->security($_POST['username']);
$password = $control->security($_POST['password']);

if($control->login($username,$password)){
	echo "success";
	session_start();
	$_SESSION['username']=$username;
	$_SESSION['password']=$password;
}else{
	echo "failed";
}

?>