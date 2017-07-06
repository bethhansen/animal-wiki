$(function() {
  $("form#animals").submit(function(event) {
    var hippo = $(".hippo").val();
    var alligator = $(".gator").val();
    var trantula = $(".trantula").val();


  if (alligator) {
    $("#gator").show();
    $("#hippo").hide();
    $("#trantula").hide()
}
  else if (trantula) {
    $("#trantula").show();
    $("#hippo").hide();
    $("#gator").hide();
  }
  else {
    $("#hippo").show();
    $("#trantula").hide();
    $("#gator").hide();
  }
  event.preventDefault();
  });
});
