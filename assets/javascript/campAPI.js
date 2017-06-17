buildCampUrl("CO");
function buildCampUrl(state) {
  var campURL = "http://api.amp.active.com/camping/campgrounds?pstate=" + state + "&api_key=tevg8efq2e83yy8hzhhp99ns"
  campAPI(campURL);
};

var myJson = [];
var campSites = [];
function campAPI(campURL) {
	$.ajax({
	        url: campURL,
	        method: "GET",
	        dataType: "xml",
	        success: xmlParser,
	        withCredentials: true,
	      })

	function xmlParser(xml) {
		$(xml).find("result").each(function(i){
			myJson[i] = {agencyIcon: $(this).attr("agencyIcon"),
						agencyName: $(this).attr("agencyName"),
						availabilityStatus: $(this).attr("availabilityStatus"),
						contractID: $(this).attr("contractID"),
						contractType: $(this).attr("contractType"),
						facilityID: $(this).attr("facilityID"),
						facilityName: $(this).attr("facilityName"),
						State: $(this).attr("State"),
						Park: $(this).attr("Park"),
						faciltyPhoto: $(this).attr("faciltyPhoto"),
						favorite: $(this).attr("favorite"),
						latitude: $(this).attr("latitude"),
						listingOnly: $(this).attr("listingOnly"),
						longitude: $(this).attr("longitude"),
						regionName: $(this).attr("regionName"),
						reservationChannel: $(this).attr("reservationChannel"),
						shortName: $(this).attr("shortName"),
						sitesWithAmps: $(this).attr("sitesWithAmps"),
						sitesWithPetsAllowed: $(this).attr("sitesWithPetsAllowed"),
						sitesWithSewerHookup: $(this).attr("sitesWithSewerHookup"),
						sitesWithWaterHookup: $(this).attr("sitesWithWaterHookup"),
						sitesWithWaterfront: $(this).attr("sitesWithWaterfront"),
						state: $(this).attr("state")};
		});
		for (i = 0; i < myJson.length; i++) {
		    campSites.push({
		    	lat: myJson[i].latitude,
		    	lng: myJson[i].longitude
		    });
		} 
		console.log(campSites);
	};
};

