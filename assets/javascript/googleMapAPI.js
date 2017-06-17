// Google Map API call and functions

//  VARIABLES
//----------------------------------------------

//  Initialize vars for api connectivity
var apiKey = "AIzaSyDewJP5LDBqFfsHhOFECYVRIjO6wS8uD9U";
googleUrl("448 calhoun st nw atlanta ga 30318");
function googleUrl(address) {
  var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;
  googleAPI(googleURL);
};
// var baseURL = "";	// base url without query information
// var queryURL = "";  // base url plus query information

// var getLat = ""; 	// Latitude from camping api 
// var getLong = "";	// Longitude from camping api
// var campSite = "";  // composite of getLat and getLong
// var campName = "";	// name of site from camping api (is this needed here?)

// other variables???

// Initialize Google Map API
function googleAPI(googleURL) {
	$.ajax({
		url: googleURL,
		method: "GET",
		dataType: "json",
	}).done(function(response){
		console.log(response);
		// place functions to act on response
		// parse json for lat/long coordinates to place markers
		// determine distance from centralized "home" location?
		// map route from "home" to campground site
	});
};

