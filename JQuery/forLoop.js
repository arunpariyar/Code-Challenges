for (var i = 0; i < $paragraphs.length; i++) {
  var element = $paragraphs[i];
  var paragraph = $(element);
  paragraph.text(toPigLatin(paragraph.text()));
}
