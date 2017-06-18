$("#addressForm").submit( function(event) {
    event.preventDefault();
    address = $("#addressInput").val();
    googleUrl(address);
    $("form").trigger("reset");
  });