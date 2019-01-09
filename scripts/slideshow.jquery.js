
(function($)
{	
	var showTime = 1000;
	var hideTime = 1200;

	var settings =
	{
		'dataUrl' : 'data/faces.json'
	};

	$.fn.slideshow = function(opts)
	{
		$.extend(settings, opts);

		$(".nextButton").hide();
		$("input.submitEmotion").hide();
		setTimeout(showImage, showTime);
		function showImage()
		{
			document.getElementById('face').style.visibility="visible";
		}

		setTimeout(hideImage, hideTime);
		function hideImage()
		{
			document.getElementById('face').style.visibility="hidden";
		}

		// read image data in for slideshow
		// convention for data in function is 'd' or 'data'
		$.getJSON(settings.dataUrl, function(d)
		{
			//shuffle function courtesy LukeH on stackoverflow: http://goo.gl/c9Skj
			function shuffle(sourceArray)
			{
				for (var n=0; n<sourceArray.length - 1; n++)
				{
					var k = n + Math.floor(Math.random() * (sourceArray.length - n));

					var temp = sourceArray[k];
					sourceArray[k] = sourceArray[n];
					sourceArray[n] = temp;
				}
			}
			
			var testItems = d.slice(3);
			var practiceItems = d.slice(0,3);
			shuffle(testItems);
			d = practiceItems.concat(testItems);

			// console.log("d is: " + d);
			// console.log("the first element of d is: " + d[0]);
			numImages = d.length;
			console.log("number of images is: " + numImages);
			var i = 0;
			var image = d[i];
			var emotionTimed=[image.title];
			console.log("the current image url is: " + image.url);
			console.log("Test # is: " + image.title);

			$('input').bind('click', function() 
			{
				console.log("checking the radio buttons")
				//Counts the number of checked boxes: thanks, Augustin!
				var atLeastOneIsChecked = $('#emotion :radio:checked').length > 0;
				
				if(atLeastOneIsChecked) 
				{
					console.log('Show the submit button');
					$("input.submitEmotion").show();
				}
			});

			$("input.submitEmotion").on("click", function()
			{
				$("input.submitEmotion").hide();
				console.log("<input.submitEmotion> was clicked");
				emotionTimed.push($("#emotion :radio:checked").val());
				console.log(emotionTimed);
				// emotionTimed=$("#emotion").serializeArray();
				// var emotionTimed=[emotionTimed[0].name, emotionTimed[0].value];
				// console.log(emotionTimed);

				$('input[name=emotion]').attr('checked', false);

				if(i<(numImages-1))
				{
					i++;
					console.log("i is: " +i);
					var image = d[i];
					
					console.log("the current image is: " + image.url);
					console.log("Test # is: " + image.title);

					emotionTimed.push(image.title);
					console.log(emotionTimed);
					
					$("#face").attr("src", image.url);
					$("#face").load(function()
					{

						setTimeout(showImage, showTime);
						function showImage()
						{
							document.getElementById('face').style.visibility="visible";
						}

						setTimeout(hideImage, hideTime);
						function hideImage()
						{
							document.getElementById('face').style.visibility="hidden";
						}
						console.log("the replacement image has loaded");
					});
						return false;
				}
				else
				{	
					$.cookie('emotionTimed', emotionTimed.toString());
					var image = d[i];
					$("figcaption").hide();
					$(".nextButton").show();
					return false;
				}

			});


		});
	}

})(jQuery);