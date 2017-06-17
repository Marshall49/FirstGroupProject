// Google Map API call and functions

//  VARIABLES
//----------------------------------------------

// var baseURL = "";	// base url without query information
// var queryURL = "";  // base url plus query information

// var getLat = ""; 	// Latitude from camping api 
// var getLong = "";	// Longitude from camping api
// var getState = "";	// get state from user address
// var campSite = "";  // composite of getLat and getLong
// var campName = "";	// name of site from camping api (is this needed here?)

//  Initialize vars for api connectivity
var apiKey = "AIzaSyDewJP5LDBqFfsHhOFECYVRIjO6wS8uD9U";
googleUrl("448 calhoun st nw atlanta ga 30318"); //pass form input
function googleUrl(address) {
  var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;
  googleAPI(googleURL);
};


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

		// return lat and long for map marker function point for zoom
		// return State var for buildCampUrl()
	});
};

//  Lukes function for building queryURL
// function normalizeAddress(managedAddressList) {
//   var queryURL = "";
//   var totalAddresses = managedAddressList.length + 1;
//   for (i = 0; i < managedAddressList.length; i++) {
//     queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + managedAddressList[i].addressOnly + "&key=AIzaSyCGfpi9ypePqPq0RxKLxYzMyR3jvjcmSy4";
//     queryAPI(i, queryURL, totalAddresses, finalAddress);
//    };
// };

// Call buildCampUrl(state)  
// Need to getState and pass to Luke.


// function intiats map, sets zoom location based on user input address, and creates markers for camp sites.
// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};  // lat long generated from userInput google api ajax call
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var campSites = [{lat: -25.363, lng: 131.044},{lat: -26.689211, lng: 132.081134}];
//         for(i=0; i < campSites.length; i++){var marker = new google.maps.Marker({
//           position: campSites[i],
//           map: map
//         	});
//         };
//       }