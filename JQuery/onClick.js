var numClicks = 0;

$("img").on("click", function () {
  numClicks++;
  $("#results").text("You clicked " + numClicks + " times");
});
