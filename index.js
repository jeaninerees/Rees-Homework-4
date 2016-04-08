$(document).ready(function() {

$(".readmore").click(readMore);
$(".readlessHide").hide;

function readMore() {
	$("#show-this-on-click").slideDown();
	$(".readlessHide").show();
}




});