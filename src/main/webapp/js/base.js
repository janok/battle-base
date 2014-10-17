/**
 * 
 */
$(document).ready(function () {

    $.ajax({
        url: "http://bouvet-code-camp.azurewebsites.net/api/game/base/hentgjeldendepost/4c97faa"
    }).then(function(data) {
        console.log(data);
        $('.gjeldende_navn').append(data.navn);
        $('.gjeldende_longitude').append(data.gps.longitude);
        $('.gjeldende_latitude').append(data.gps.latitude);
        $('.gjeldende_postNummer').append(data.postNummer);
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
		sendpifmelding(event, data);		
	});
});	

function sendpifmelding(event, data) {
    event.preventDefault();
	var postData = data;
	console.log(postData);
	$.ajax({
		url : "http://bouvet-code-camp.azurewebsites.net/api/game/base/sendpifmelding",
		type : 'POST',
		data : postData
		success: function(data) {
			alert("success");
		}
	  });    
};