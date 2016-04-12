$(document).ready(function() {

$(".readlessHide").hide();
$(".readmore").click(readMore);
$(".readlessHide").click(readLess);
$(".learnmore").click(learnMore);
$(".buttonBlue").click(prevent);

function readMore() {
// Don't forget event.preventDefault on all your click functions
  event.preventDefault();
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readlessHide").show();
}

function readLess() {
  event.preventDefault();
	$(".readlessHide").hide();
	$(".hide").slideUp();
	$(".readmore").show();
}

function learnMore() {
  event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
}

function prevent() {
  // preventDefault is a function so it needs a () after it.
	$(".buttonBlue").event.preventDefault();
}

});