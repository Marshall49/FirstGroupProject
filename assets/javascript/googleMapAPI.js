// Google Map API call and functions

//  VARIABLES
//----------------------------------------------

//  Initialize vars for api connectivity
var apiKey = "AIzaSyDewJP5LDBqFfsHhOFECYVRIjO6wS8uD9U";

var homeAddress = "";	// home address from user input
var homeLat = ""; 		// Latitude from googleAPI 
var homeLng = "";		// Longitude from googleAPI
var homeLoc = [];		// Lat Long object for map centering
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

		//  parsed data from api
		var homeLat = response.results[0].geometry.location.lat;
		var homeLng = response.results[0].geometry.location.lng;
		//	Set global homLoc to lat and lng from api
		homeLoc = {lat: homeLat, lng: homeLng};
		
		// Log for testing  delete later ##############
		console.log("homeLoc:");
		console.log(homeLoc);
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++		
		// isolate the State of homeAddress to pass to campAPI
		// need to determine object response to get State code.
		// var homeState = response.object.
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++
	});
}

// function intiats map, sets zoom location based on user input address, and creates markers for camp sites.
function initMap(campAPI) {
	// lat long generated from userInput google api ajax call
		
	// Log for testing delete later #####################3
	console.log("homeLoc initMap:");
	console.log(homeLoc);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: homeLoc
});
	console.log("campSites initMap");
	console.log(campSites);
	//  campSites[] from campAPI json object
	// var campSites = [{lat: 33.8794493, lng: -84.5064732}]; //hard code for testing############
	for(i=0; i < campSites.length; i++){var marker = new google.maps.Marker({
		position: campSites[i],
		map: map
		});
	};
}
