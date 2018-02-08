$(document).ready(function() {
  $("button#btn-cats").click(function() {
    $("div#cats-container").text();
    $("div#cats-container").text('<img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="image of a cat">');
  });

  $("button#btn-cats-gone").click(function() {
    $("div#cats-container").children().remove();
  });

  $("button#btn-dogs").click(function() {
    $("div#dogs-container").prepend('<img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="image of a cat">');
  });

  $("button#btn-dogs-gone").click(function() {
    $("div#dogs-container").children().remove();
  });
});
