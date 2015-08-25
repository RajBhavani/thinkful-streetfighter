$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		/* this function moves Ryu to his ready position */
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		/* this function moves Ryu back to still position */
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
});
