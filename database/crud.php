<?php
class crud{
	private $connect=null;
	function __construct(){
	$this->connect = mysqli_connect("mysql.idhostinger.com", "u887596555_kecoa", "12345678","u887596555_kecoa") or die(mysqli_error());
	}
	function security($data){
		return htmlentities(htmlspecialchars(strip_tags($data)));
	}
	function saveData($longitude,$latitude){
		$sql = mysqli_query($this->connect,"INSERT INTO `atribute`(`longitude`, `latitude`) VALUES ('$longitude','$latitude')") or die(mysqli_error());
		return $this->checkBoolean($sql);
	}
	function checkBoolean($param){
		if($param){
			return true;
		}else{
			return false;
		}
	}
	function register($username,$email,$password){
		$sql = mysqli_query($this->connect,"INSERT INTO `register`(`username`, `email`, `password`, `date_register`) VALUES ('$username','$email','$password',current_date())") or die(mysqli_error());
		return $this->checkBoolean($sql);
	}
	function login($username,$password){
		$sql = mysqli_query($this->connect,"SELECT * FROM `register` WHERE `username`='$username' and `password`='$password'") or die(mysqli_error());
		if(mysqli_num_rows($sql)>0){
			return true;
		}
		
	}
}
?>