$.ajax({
        url: "https://developer.nps.gov/api/v0/alerts?parkCode=yell",
        headers: {"Authorization": "A0AF4455-7229-468C-942B-5BE75278BCE5"},
        method: "GET",
        // crossDomain: true,
        dataType: "json",
        // jsonp: 'jsonp',
        xhrFields: {
        	withCredentials: true
        },
        success: function() { alert("Success"); },
    	error: function() { alert('Failed!'); },
      }).done(function(response) {
        console.log(response);
    });

