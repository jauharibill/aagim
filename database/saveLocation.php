<?php 
include "crud.php";
$control = new crud();
$longitude = $control->security($_POST['lon']);
$latitude = $control->security($_POST['lat']);
if($control->saveData($longitude,$latitude)){
	echo "true";
}else{
	echo "false";
}
?>