$.ajax({
        url: "https://developer.nps.gov/api/v0/alerts?parkCode=yell",
        method: "GET",
        headers: {"Authorization": "A0AF4455-7229-468C-942B-5BE75278BCE5"},
        crossDomain: true,
      }).done(function(response) {
        console.log(response);
    });