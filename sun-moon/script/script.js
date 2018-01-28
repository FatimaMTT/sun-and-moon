var date = new Date();
var hours = date.getHours();
if ( (hours > 7) && (hours < 9.5) ) { 
    document.getElementById("day").src = "images/day-7-930.jpg";
}

else if ( (hours > 9.5) && (hours < 12) ) { 
    document.getElementById("day").src = "images/day-930-12.jpg";
} 

else if ( (hours > 12) && (hours < 14.5) ) { 
    document.getElementById("day").src = "images/day-12-230.jpg";
}

else if ( (hours > 14.5) && (hours < 17) ) { 
    document.getElementById("day").src = "images/day-230-5.jpg";
}

else { 
	document.getElementById("day").src = "images/night.jpg"; 
}