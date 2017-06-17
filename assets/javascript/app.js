var myJson = [];
$.ajax({
        url: "http://api.amp.active.com/camping/campgrounds?pstate=CO&amenity=4001&sewer=3007&api_key=tevg8efq2e83yy8hzhhp99ns",
        method: "GET",
        dataType: "xml",
        success: xmlParser
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

		console.log(myJson);
	});
};

