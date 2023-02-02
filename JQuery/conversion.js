let $paragraphs = $("p");

//EACH LOOP

//

$paragraphs.each(function (index, element) {
  //CONVERT DOM NODE TO JQUERY COLLECTION
  let $paragraph = $(element);

  //CREATE A NEW PARAGRAPH ELEMENT
  let newPara = $("<p>");

  newPara.text($paragraph.text().toUpperCase());

  $("body").append(newPara);
});
