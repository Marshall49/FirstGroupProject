$("#addressForm").submit( function(event) {
    event.preventDefault();
    var address = $("#addressInput").val();
    googleUrl(address);
    $("form").trigger("reset");
  });

$.ajax({
        url: "http://localhost:3000/states/wi",
        method: "GET",
        success: function(data){
        console.log(data)}
      })