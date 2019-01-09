// perform only when page is loaded
$(document).ready(function() 
{
	// converting into a plug-in component
	$('div.page').slideshow(
	{
		showTime: 1000,
		hideTime: 3000,
		'dataUrl' : 'data/faces.json' 
	}); 
});