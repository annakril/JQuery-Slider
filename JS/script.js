$(function(){
	var $picture = $('#carousel ul li').first();
	var singlePictureWidth = $picture.outerWidth(); 

	$(window).on('resize', function(){
		singlePictureWidth = picture.outerWidth();
	});
	var $ul = $('#carousel ul');

	setInterval(function () {
		var slidePictureSwap = function(){
			var $firstPicture = $('#carousel ul li').first();
			var $lastPicture = $('#carousel ul li').last();
			$lastPicture.after($firstPicture);
			$ul.css({'margin-left': 0}); 
		};
		$ul.animate({
			'margin-left': -singlePictureWidth
			}, 500, slidePictureSwap);
	}, 2000);
	
	console.log(singlePictureWidth);
});