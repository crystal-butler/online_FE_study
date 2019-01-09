$(document).ready
(
	function() 
	{
		console.log('Loaded our next button visibility controller');
		
		$(".nextButton").hide();

		$('input').bind('click', function() 
		{
			//Counts the number of checked boxes -- thanks Augustin!
			var atLeastOneIsChecked = $('#permission :checkbox:checked').length > 0;
			
			if(atLeastOneIsChecked) 
			{
				console.log('Show the next button');
				$(".nextButton").show();
			} else 
			{
				console.log('Hide the next button');
				$(".nextButton").hide();
			}

		});
	}

);