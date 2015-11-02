
var lat = null;
var lng = null;


function getLatLng(){
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(position){
		lat = position.coords.latitude;
		lng = position.coords.longitude;
	});
}

}
function getMap(){
	var mapOptions = {
		center : new google.maps.LatLng(lat,lng),
		zoom:15,
		MapType : google.maps.MapTypeId.TERRAIN,
		disableDefaultUI:true
	}
	var map = new google.maps.Map(document.getElementById("maps"),mapOptions);
	new google.maps.Marker({
		position : new google.maps.LatLng(lat,lng),
		map : map
	});
}

function mapDefault(){
	var opsi = {
		center : new google.maps.LatLng(-7.9516095,112.606073),
		zoom:10,
		MapType: google.maps.MapTypeId.ROAD,
		disableDefaultUI:true
	}
	var map = new google.maps.Map(document.getElementById("maps"),opsi);
	new google.maps.Marker({
		position : new google.maps.LatLng(lat,lng),
		map : map
	});
}
function GetMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(controling){
			alert(controling.coords.latitude+" - "+controling.coords.longitude);
		});
	}
}

$(function(){
	// var param=0;
	$("#map").on("click",function(){
		getLatLng();
	});
	/*$("#btnGetLocation").on("click",function(){
		//GetMyLocation();
		if(param==1){
			param=1;
		}else{
			param++;
		}
	});*/
});