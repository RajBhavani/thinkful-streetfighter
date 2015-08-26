$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// move Ryu to his ready position
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
		$('.hadouken').show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
				}
			);
		// play hadouken sound
	});
	$('.ryu').mouseup(function() {
		// Ryu back to ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

/* jQuery 'chaining' method below. 'Traditional' method is above

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// move Ryu to his ready position
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		// move Ryu back to still position
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		// Ryu throwing position
		// show hadouken and animate it to right of screen
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// play hadouken sound
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// Ryu back to ready position
	});
});

*/