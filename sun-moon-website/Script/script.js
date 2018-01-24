var date = new Date();
var hours = date.getHours();
if ( (hours > 8) && (hours < 20) ) { 
    document.getElementById("myimage").src = "images/day.jpg";
} else { 
	document.getElementById("day").src = "images/night.jpg"; 
} 