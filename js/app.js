$( document ).ready(function() {
	'use strict';


	var ryu = $( '.ryu' );


	ryu
	.on( 'mouseenter', function() {
		ryu
		.addClass( 'ryu-ready' )
		.removeClass( 'ryu-throwing ryu-still' );
	})
	.on( 'mouseleave', function() {
		ryu
		.addClass( 'ryu-still' )
		.removeClass( 'ryu-ready ryu-throwing' );
	});


});