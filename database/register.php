<?php 

include "crud.php";
$control = new crud();
$name = $control->security($_POST['username']);
$email = $control->security($_POST['email']);
$password = $control->security($_POST['password']);

if($control->register($name,$email,$password)){
	echo "success";
}else{
	echo "failed";
}




?>