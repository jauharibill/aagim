<!DOCTYPE html>
<html>
<head>
	<title>Get location</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="../js/maps.js"></script>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
	<div class="wrapper">
		<div class="header">
			<div class="title">[ KECOA ]</div>
				<div class="menu">
					<a href="#"><div class="list-menu" id="map">Home</div></a>
					<a href="#"><div class="list-menu" id="set">Setting</div></a>
				</div>
			</div>
			<div class="body">
				
				<div id="map-div" class="display-body">
				<div id="mapLocation"></div>				
				
				</div>
				<div id="map-atribute" class="display-body">
					<div id="menu-atribute" class="atribute-value">
						<button type="button" id="bird-eye">Bird Eye</button><button type="button">Get Direction</button>
						<button id="show-pushpin"type="button">Show Pushpin</button>
					</div>
					<div class="atribute-value"></div>
					<div class="atribute-value"></div>
					<div class="atribute-value"></div>
				</div>
				<div id="set-div" class="display-body"></div>
			</div>
			<div class="footer">
				<div id="logout"></div>
			</div>
		</div>

	</body>
	</html>