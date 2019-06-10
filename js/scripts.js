$(document).ready(function(){
  $("#livingForm").submit(function(event) {
    // $("body").find(".col-md-4").addClass("hidden");
    // $("body").find(".col-md-4").toggleClass("hidden");
    var city = $("input:radio[name=livType]:checked").val();
    if (city === "losAngeles") {
      $("#losAngeles").show();
      $("#newYork, #chicago").hide();
    } else if (city === "newYork") {
      $("#newYork").show();
      $("#losAngeles, #chicago").hide();
    } else if (city === "chicago") {
      $("#chicago").show();
      $("#losAngeles, #newYork").hide();
    }

    event.preventDefault();
  });
});
