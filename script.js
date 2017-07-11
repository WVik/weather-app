
var sunclass="<div class='sun-logo'></div>";
var cloudclass="<div class='cloud-logo'></div>";
var rainclass="<div class='rain-logo'></div>";

$('#submit').click(function(){

for(var i=0;i<7;i++){	
	$('.weather-'+i.toString()+' .temperature').html("<div class='sun'>Temperature</div>");
	$('.weather-'+i.toString()+' .pressure').html("<div class='press'>Pressure</div>");
	$('.weather-'+i.toString()+' .humidity').html("<div class='humid'>Humidity</div>");
}


city = $('#city').val();
console.log(city);


$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&APPID=18fa3024fc6b14d7c23a3726e8794865',function(json){
	console.log(json);
	$('.temperature p').html("");
	$('.pressure p').html("");
	$('.humidity p').html("");
	for(var i=0;i<6;i++){
		

		var today = new Date(parseInt(json.list[i].dt)+24*60*60*1000*i);
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		var today = dd+'/'+mm+'/'+yyyy;
		console.log(today);
		//$('.weather-'+i.toString()+' .date').html(today);


		var temp = json.list[i].temp.day-273;
		var pres = json.list[i].pressure;
		var humid = json.list[i].humidity;
		var weatherCondition = json.list[i].weather[0].main;
		
		i = parseInt(i);
		if(weatherCondition==="Rain")
			{
			$('.weather-'+i.toString()+' .temperature').append(rainclass);
			weatherCondition="";
			
		}
		else if(weatherCondition==="Clouds")
			{$('.weather-'+i.toString()+' .temperature').append(cloudclass);
			weatherCondition="";
		}
		else
			{$('.weather-'+i.toString()+' .temperature').append(sunclass);
		weatherCondition="";
		}

		temp = Math.round(temp);
		$('.weather-'+i.toString()+' .temperature').append("<p class='value'>"+temp+ String.fromCharCode(176)+" C </p>");
		$('.weather-'+i.toString()+' .humidity').append("<p class='value'>"+humid+" % </p>");
		$('.weather-'+i.toString()+' .pressure').append("<p class='value'>"+pres+" hPa </p>");

	}
	$('#weather-disp').css('visibility','visible');

})

});


