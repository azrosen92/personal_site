$(function() {
	var windowHeight = 600; //$(window).height();
	console.log(windowHeight);

	var lineHeight = (windowHeight - 72)/4;

	$('.line-container').each(function() {
		$(this).css({
			'padding-top': lineHeight/2,
			'padding-bottom': lineHeight/2
		});
	});

	$('.bubble').each(function() {
		console.log("resizing");
		$(this).css('height', $(this).css('width'));
	});

	$(window).resize(function() {
		$('.bubble').each(function() {
			$(this).css('height', $(this).css('width'));
		});
	});

	$(document).mousemove(function(event) {
		var mouseX = event.pageX;
		var mouseY = event.pageY;
		// console.log("Mouse at: " + event.pageX + ", " + event.pageY);
		$('.bubble').each(function() {
			// Get center of bubble
			var bubbleX = $(this).offset().left;
			var bubbleY = $(this).offset().top;

			// Compute line equation from mouse to bubble.
			var dx = mouseX - bubbleX;
			var dy = mouseY - bubbleY;

			var MAGNITUDE = -3;

			if (mouseX > bubbleX) {
				var x_offset = MAGNITUDE * dx/$(window).width();
			} else {
				var x_offset = MAGNITUDE * dx/bubbleX;
			}

			if (mouseY > bubbleY) {
				var y_offset = MAGNITUDE * dy/$(window).height();
			} else {
				var y_offset = MAGNITUDE * dy/bubbleY;
			}

			var box_shadow_property = x_offset + 'px ' + y_offset + 'px ' + '5px black';
			$(this).css('box-shadow', box_shadow_property);
		});
	});

	$('.svg-icon').hover(function() {
		$(this).css('cursor', 'pointer');
	})
	
});