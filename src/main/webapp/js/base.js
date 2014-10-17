/**
 * 
 */
$(document).ready(function () {

    var map = initializeMap();

    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/base/hentgjeldendepost/4c97faa"
    }).then(function(data) {
        console.log(data);
        $('.gjeldende_navn').append(data.navn);
        $('.gjeldende_latitude').append(data.gps.latitude);
        $('.gjeldende_longitude').append(data.gps.longitude);
        $('.gjeldende_postNummer').append(data.postNummer);

        setMyPositionMarker(map, data.gps.latitude, data.gps.longitude, data.navn);
    });

    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/base/hentpifposisjon/4c97faa"
    }).then(function(data) {
        console.log(data);
        $('.posisjon_latitude').append(data.latitude);
        $('.posisjon_longitude').append(data.longitude);
        $('.posisjon_infisert').append(data.infisert);
        $('.posisjon_tid').append(data.tid);
        $('.posisjon_erinfisert').append(data.erinfisert);

        setMyPositionMarker(map, data.latitude, data.longitude, "PIF");
    });

    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/base/hentregistrertekoder/4c97faa"
    }).then(function(data) {
        console.log(data);
        $('.koder').append(JSON.stringify(data));
    });

	$( "#sendpifmelding" ).submit(function(event) {
		var type = $( "#selectType option:selected" ).val();
		var innhold = $(this).find("input[name='txtInnhold']").val();
	
		var data = JSON.stringify(
	            {
	                Type: type,
	                Innhold: innhold,
	                LagId: "4c97faa" 
	            });
		
		console.log(data);
		sendPifMelding(event, data);		
	});
});

function sendPifMelding(event, data) {
    event.preventDefault();
	var postData = data;
	console.log(postData);
	$.ajax({
		url : "http://bouvet-code-camp.azurewebsites.net/api/game/base/sendpifmelding",
		type : 'POST',
		data : postData,
	  });
};

function initializeMap() {

    var mapOptions = {
        center: { lat: 60, lng: 9},
        zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    setCurrentPosition(map);
    return map;
}

function setCurrentPosition(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }
}

function setMyPositionMarker(map, lat, long, text) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLocation = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: myLocation,
                title: text
            });


            marker.setMap(map);
            map.setCenter(myLocation);
        });
    }

};