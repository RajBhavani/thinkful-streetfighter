$( document ).ready(function() {
	'use strict';


	var ryu = $( '.ryu' );


	function playHadouken() {
		// play sound
		var hadouken = document.getElementById( 'hadouken-sound' );
		hadouken.volume = 0.5;
		hadouken.load();
		hadouken.play();

		// play animation
		$( '.hadouken' )
		.show()
		.animate(
			{ left: '300px' },
			500,
			function() {
				$( this ).hide()
				// reset css left
				.removeAttr( 'style' );
			}
		)
	}


	ryu
	// ready position
	.on( 'mouseenter mouseup', function() {
		ryu
		.addClass( 'ryu-ready' )
		.removeClass( 'ryu-throwing ryu-still' );
	})
	// throw hadouken
	.on( 'mousedown', function() {
		ryu
		.addClass( 'ryu-throwing' )
		.removeClass( 'ryu-ready ryu-still' );
		
		playHadouken();
	})
	// restore sill pose
	.on( 'mouseleave', function() {
		ryu
		.addClass( 'ryu-still' )
		.removeClass( 'ryu-ready ryu-throwing' );
	})
	;


});