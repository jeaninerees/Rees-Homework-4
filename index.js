$(document).ready(function() {

$(".readlessHide").hide();
$(".readmore").click(readMore);
$(".readlessHide").click(readLess);
$(".learnmore").click(learnMore);
$(".button blue").click(event);

function readMore() {
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readlessHide").show();
}

function readLess() {
	$(".readlessHide").hide();
	$(".hide").slideUp();
	$(".readmore").show();
}

function learnMore() {
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
}

function event() {
	(".button blue").preventDefault;
}

});