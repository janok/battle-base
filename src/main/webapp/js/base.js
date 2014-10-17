/**
 * 
 */
$(document).ready(function () {

	$( "#sendpifmelding" ).submit(function(event) {
		sendpifmelding(event, this);		
	});
    
});	

function sendpifmelding(event, this) {
    event.preventDefault();
	
	$.post("http://bouvet-code-camp.azurewebsites.net/api/game/base/sendpifmelding",
    		    {'Type': 'Fritekst','Innhold': 'TEST','LagId': '4c97faa'},
    		    function(data, textStatus, jqXHR)
    		    {
    		        $('.melding').append(textStatus);
    		    }).fail(function(jqXHR, textStatus, errorThrown) 
    		    {
    		        alert(textStatus);
    		    });
};