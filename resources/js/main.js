$(function() {

	$(window).resize(function() {
		$('.square').each(function() {
			console.log("resizing");
			$(this).css('height', $(this).css('width'));
		});
	});
	
});