$(document).ready(function() {
<<<<<<< HEAD
 var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
=======

function setmap(){
    
	var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(17.43144,78.432297),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var marker;
$.each([[17.43144,78.432297],[17.3753,78.4744],[17.434797,78.428349]], function( index, value ) {
  
 marker = new google.maps.Marker({
    position: new google.maps.LatLng(value[0],value[1]),
    title:"test success"
});
marker.setMap(map);

});

}

setmap();
// To add the marker to the map, call setMap();


>>>>>>> adc6f344349d19dd2a6e3668bf59f51bea2295f4
});