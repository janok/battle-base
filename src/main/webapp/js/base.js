/**
 * 
 */
$(document).ready(function () {

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