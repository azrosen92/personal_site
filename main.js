window.onload = function() {
	console.log("hello");
	var s = skrollr.init({
		render: function(data) {
			console.log(data.curTop);
		}
	});
}