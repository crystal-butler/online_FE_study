$(document).ready
(
	function() 
	{
		
		console.log('Loaded our submit button visibility controller');
		console.log('Loaded our next button visibility controller');
		
		$("input.submitRace").hide();
		$(".nextButton").hide();

		$('input').bind('click', function() 
		{

			//Counts the number of checked boxes
			var atLeastOneIsChecked = $('#racial :radio:checked').length > 0;
			
			if(atLeastOneIsChecked) 
			{
				console.log('Show the submit button');
				$("input.submitRace").show();
			} else 
			{
				console.log('Hide the submit button');
				$("input.submitRace").hide();
			}

			$("input.submitRace").on("click", function()
			{
				console.log("<input.submitRace> was clicked");

				var race=[];
				race.push($("#racial :radio:checked").val());
				console.log(race);
				$.cookie('race', race.toString());
				$("input.submitRace").hide();
				$(".nextButton").show();
				//race=($("#racial").serializeArray());
				//console.log(race);
				//var race=[race[0].name, race[0].value];
				//console.log(race);
				return false;
			});


		});
	}

);