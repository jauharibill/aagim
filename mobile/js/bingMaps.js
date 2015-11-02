var map = null;
var geoLocationProvider = null;
var latitude=null;
var longitude=null;


      function getMap(elem, key)
      {
        map = new Microsoft.Maps.Map(document.getElementById(elem), {credentials: key});
      }
      function getCurrentLocation()
      {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showposition);
        }else{
          document.write("wrong");
        }

      }
      function showposition(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      }
      function showMap(){
    getMap("maps","AlXUVfU_9q_A7U6bo92RurGOdKP6yeMhza-XaImwFLu0o3a5xeaQI6Q_FZk_TXyU");
        map.setView({zoom:10,center: new Microsoft.Maps.Location(latitude,longitude), width:320,height:480});
      }
      function zoomView(){
        map.setView({zoom:21,mapTypeId : Microsoft.Maps.MapTypeId.automatic});
      }

      function setPushpin(longitude,latitude){
      map.entities.clear(); 
      var pushpin= new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(longitude, latitude), null); 
      map.entities.push(pushpin); 
      pushpin.setLocation(new Microsoft.Maps.Location(longitude, latitude));   
      }
      function saveData(){
        $.post("database/upload-image.php",$("#form-upload-image").serialize(),function(data,success){
          alert(data);
        });
      }
      $(function(){
        getCurrentLocation();
        showMap();
        var $param = 1;
        $("#map-div").show();$("#set-div").hide();
        $("#map").on("click",function(){
          $("#map-div").show();
          $("#set-div").hide();

        }); $("#set").on("click",function(){
          
          $("#map-div").hide();
          $("#set-div").show();
         
        }); 
        $("#show-pushpin").on("click",function(){
          getCurrentLocation();
          setPushpin(latitude,longitude);
        });
        $("#bird-eye").on('click',function(){
          zoomView();
        });

        $("#btnGetLocation").on("click",function(){
    getCurrentLocation();
    $.post("database/saveLocation.php",{'lat':latitude,'lon':longitude},function(data,success){
      if(data=="true"){
        alert("your location have been track "+success);
      }else if (data=="false"){
        alert("error get location "+success);
      }else{
        alert(data);
      }
    });
  });

      });