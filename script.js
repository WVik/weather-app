for(var i=0;i<7;i++){	
	$('.weather-'+i.toString()+' .temperature').html("<div class='sun'>Temperature</div>");
	$('.weather-'+i.toString()+' .pressure').html("<div class='press'>Pressure</div>");
	$('.weather-'+i.toString()+' .humidity').html("<div class='humid'>Humidity</div>");
}

$('#submit').click(function(){

var today = new Date();
id = "1279105";
city = $('#city').val();
console.log(city);
$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&APPID=18fa3024fc6b14d7c23a3726e8794865',function(json){
	$('.temperature p').html("");
	$('.pressure p').html("");
	$('.humidity p').html("");
	console.log(json.list[1].humidity);
	for(var i=0;i<7;i++){
		var temp = json.list[i].temp.day-273;
		var pres = json.list[i].pressure;
		var humid = json.list[i].humidity;
		temp = Math.round(temp);
		$('.weather-'+i.toString()+' .temperature').append("<p class='value'>"+temp+ String.fromCharCode(176)+" C </p>");
		$('.weather-'+i.toString()+' .humidity').append("<p class='value'>"+humid+" % </p>");
		$('.weather-'+i.toString()+' .pressure').append("<p class='value'>"+pres+" hPa </p>");

	}
	$('#weather-disp').css('visibility','visible');

})

});


