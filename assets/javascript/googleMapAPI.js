// Google Map API call and functions

//  VARIABLES
//----------------------------------------------

//  Initialize vars for api connectivity
var apiKey = "AIzaSyDewJP5LDBqFfsHhOFECYVRIjO6wS8uD9U";

var homeAddress = "";	// home address from user input
var homeLat = ""; 		// Latitude from googleAPI 
var homeLng = "";		// Longitude from googleAPI
var homeState = "";		// State from googleAPI
var campName = "";		// name of site from camping api (is this needed here?)

//  FUNCTIONS
//----------------------------------------------

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to get homeAddress from user input goess here
// #search-bar.on("click", function(){
// 	var homeAddress = form.val().trim();
	// return homeAddress;
// });
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

googleUrl("1582 mosaic way smryna ga 30080"); // Place holder for now, need to pass form input "homeAddress"

function googleUrl(address) {
  var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey +"&callback=initMap";
  googleAPI(googleURL);
};

// Initialize Google Map API
function googleAPI(googleURL) {
	$.ajax({
		url: googleURL,
		method: "GET",
		dataType: "json",
	}).done(function(response){
		console.log(response);

		//  parsed data from google map api json
		var homeLat = response.results[0].geometry.location.lat;
		var homeLng = response.results[0].geometry.location.lng;
		var homeLoc = {lat: homeLat, lng: homeLng};
		
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++		
		// isolate the State of homeAddress to pass to campAPI
		// need to determine object response to get State code.
		// var homeState = response.object.
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++
	});
}

// function intiats map, sets zoom location based on user input address, and creates markers for camp sites.
function initMap(googleAPI, campSites) {
// lat long generated from userInput google api ajax call
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: homeLoc
});
	//  campSites[] from campAPI json object
	for(i=0; i < campSites.length; i++){var marker = new google.maps.Marker({
		position: campSites[i],
		map: map
		});
	};
}
