jQuery(window).load(function() {	
	
	var $ = jQuery;
	$('.horizontal_accordion').each(function() {

		var width = $(this).data('image-width');

		$(this).find('li').each(function() {

			var original_bg = $(this).data('bg');

			var $img = $(this).find('.slide-img');
			var img_id = $img.attr('id');

			var imgObj = document.getElementById(img_id);
			var gray_img = gray(imgObj, width, 280);

			// $(this).data('gray-bg', gray_img);

			$img.after('<img src="' + gray_img + '" class="slide-img-gray" alt="" />');
		});
	});
});

function gray(imgObj, imgW, imgH) {  
	var canvas = document.createElement('canvas');  
	var canvasContext = canvas.getContext('2d');  

	canvas.width = imgW;  
	canvas.height = imgH;  

	canvasContext.drawImage(imgObj, 0, 0);  
	var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);  

	for(var y = 0; y < imgPixels.height; y++){  
		for(var x = 0; x < imgPixels.width; x++){  
			var i = (y * 4) * imgPixels.width + x * 4;  
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;  
			imgPixels.data[i] = avg;   
			imgPixels.data[i + 1] = avg;   
			imgPixels.data[i + 2] = avg;  
		}  
	}  
	canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);  
	return canvas.toDataURL();  
}  
