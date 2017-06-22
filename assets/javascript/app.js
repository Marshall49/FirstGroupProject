// On form submittal, using submit to avoid button per design scheme
$("#addressForm").submit( function(event) {
    event.preventDefault();
    // Sets address to user input
    var address = $("#addressInput").val().trim();
    // Passes address to build google api query
    googleUrl(address);
    // Reset form
    $("form").trigger("reset");
  });

$.ajax({
	url: "http://localhost:3000/states/wi",
	method: "GET",
	success: function(data){
		console.log(data);
		var campSites = data;
	}
})

