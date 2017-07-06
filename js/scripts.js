$(function() {
  $("form#animals").submit(function(event) {

var animalChoice = $("#animalchoice").val();

  if (animalChoice === "alligator" ) { // someone chose "alligator"
    $("#gator").show();
    $("#hippo").hide();
    $("#tarantula").hide()
}
  else if (animalChoice === "tarantula") { //rewrite
    $("#tarantula").show();
    $("#hippo").hide();
    $("#gator").hide();
  }
  else {
    $("#hippo").show();
    $("#tarantula").hide();
    $("#gator").hide();
  }
  event.preventDefault();
  });
});
