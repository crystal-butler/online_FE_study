$(document).ready
(
	function() 
	{
		
		console.log('Loaded our submit button visibility controller');
		console.log('Loaded our next button visibility controller');
		
		$("input.submitEmotion").hide();
		$(".nextButton").hide();

		$('input').bind('click', function() 
		{

			//Counts the number of checked boxes -- thanks Augustin!
			var atLeastOneIsChecked = $('#emotion :radio:checked').length > 0;
			
			if(atLeastOneIsChecked) 
			{
				console.log('Show the submit button');
				$("input.submitEmotion").show();
			} /* else 
			{
				console.log('Hide the submit button');
				$("input.submitEmotion").hide();
			} */

			$("input.submitEmotion").on("click", function()
			{
				console.log("<input.submitEmotion> was clicked");
				$(".nextButton").show();
				console.log("<input.submitEmotion");
				console.log($("#emotion").serializeArray());
				return false;
			});

		});
	}

);