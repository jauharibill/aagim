

$(function(){
		$("#camera").slideDown();
		$("#maps").slideUp();
		$("#setting").slideUp();
	$("#cam").on("click",function(){
		$("#camera").slideDown(10);
		$("#maps").slideUp(10);
		$("#setting").slideUp(10);
	});$("#map").on("click",function(){
		$("#camera").slideUp(10);
		$("#maps").slideDown(10);
		$("#setting").slideUp(10);
		
	});$("#set").on("click",function(){
		$("#camera").slideUp(10);
		$("#maps").slideUp(10);
		$("#setting").slideDown(10);
	});





});