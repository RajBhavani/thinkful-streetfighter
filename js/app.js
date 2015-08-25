$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// move Ryu to his ready position */
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		// move Ryu back to still position
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function() {
		// Ryu throwing position
		// show hadouken and animate it to right of screen
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// play hadouken sound
		
	});
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// Ryu back to ready position
	});
});
