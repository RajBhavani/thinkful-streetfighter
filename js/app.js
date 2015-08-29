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
		// Play hadouken sound
		playHadouken();
		// Ryu throwing position
		// show hadouken and animate it to right of screen
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
				}
			);
	});
	$('.ryu').mouseup(function() {
		// Ryu back to ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

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