$(function(){

$("#formRegister").hide();
$("#formLogin").show();
$("#activeLog").on("click",function(){
$("#formRegister").hide();
$("#formLogin").show();
});
$("#activeReg").on("click",function(){
$("#formRegister").show();
$("#formLogin").hide();

});

function checkValue(param,forward,backward){
if(param=="success"){
 		window.location = forward;
 	}else{
 		alert(param);
 	}
}
$("#btnRegister").on("click",function(){
	var $formReg = $("#formRegister").serialize();
 $.post("http://billtan.esy.es/kecoa-v.1.0/database/register.php",$formReg,function(data,success){
 	checkValue(data,"index.html","index.html");
 	
 });
});

$("#btnLogin").on("click",function(){
	var $formLog = $("#formLogin").serialize();
$.post("http://billtan.esy.es/kecoa-v.1.0/database/login.php",$formLog,function(data,success){
	checkValue(data,"dasboard.html","index.html");
})

});
});