// Google Map API call and functions

//  VARIABLES
//----------------------------------------------

//  Initialize vars for api connectivity
var apiKey = "AIzaSyDewJP5LDBqFfsHhOFECYVRIjO6wS8uD9U";
var state = ""			// state var from google for camp
var homeLat = ""; 		// Latitude from googleAPI 
var homeLng = "";		// Longitude from googleAPI
var homeLoc = [];		// Lat Long object for map centering
var campName = "";		// name of site from camping api (is this needed here?)

//  FUNCTIONS
//----------------------------------------------

// Builds google api query url
function googleUrl(address) {
  var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey + "&callback=initMap";
  googleAPI(googleURL);
  // Log for testing delete later ####################
  console.log(googleURL);
};

// Initialize Google Map API
function googleAPI(googleURL) {
	$.ajax({
		url: googleURL,
		method: "GET",
		dataType: "json",
	}).done(function(response){
		console.log(response);

		//  Latitude and Longitude from api
		var homeLat = response.results[0].geometry.location.lat;
		var homeLng = response.results[0].geometry.location.lng;
		
		//	Set global homLoc to lat and lng from api
		homeLoc = {lat: homeLat, lng: homeLng};
		
		stateGiver(response);
		
		// Log for testing  delete later ##############
		console.log("homeLoc:");
		console.log(homeLoc);

		initMap();

	});
}

// function intiats googlemap
function initMap() {	
	// Log for testing delete later #########################
	console.log("homeLoc initMap:");
	console.log(homeLoc);

	// sets zoom location
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		//center: homeLoc
		center: homeLoc
});
	// Log for testing delete later #########################
	console.log("campSites initMap");
	console.log(campSites);

	//hard code for testing delete later #########################
	var campSites = [{lat: 33.8794493, lng: -84.5064732}]; 
	
	//  campSites[] from campAPI json object
	for(i=0; i < campSites.length; i++){var marker = new google.maps.Marker({
		position: campSites[i],
		map: map
		});
	};
}

function stateGiver(response) {
  for (p = 0; p < response.results.length; p++) {
    for (j = 0; j < response.results[p].address_components.length; j++) {
      for (h = 0; h < response.results[p].address_components[j].types.length; h++) {
        if (response.results[p].address_components[j].types[h] === "administrative_area_level_1") {
          state = response.results[p].address_components[j].short_name;
      	};
      };
    };
  };
  console.log("stateGiver: ");
  console.log(state);
};