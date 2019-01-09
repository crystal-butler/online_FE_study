$(document).ready
(
	function() 
	{
		
		console.log('Loaded our submit button visibility controller');
		console.log('Loaded our next button visibility controller');
		
		$("input.submitGender").hide();
		$(".nextButton").hide();

		$('input').bind('click', function() 
		{

			//Counts the number of checked boxes
			var atLeastOneIsChecked = $('#gender :radio:checked').length > 0;
			
			if(atLeastOneIsChecked) 
			{
				console.log('Show the submit button');
				$("input.submitGender").show();
			} else 
			{
				console.log('Hide the submit button');
				$("input.submitGender").hide();
			}

			$("input.submitGender").on("click", function()
			{
				console.log("<input.submitGender> was clicked");
				var gender=[];
				gender.push($("#gender :radio:checked").val());
				console.log(gender);
				$.cookie('gender', gender.toString());
				$("input.submitGender").hide();
				$(".nextButton").show();
				//gender=($("#gender").serializeArray());
				//console.log(gender);
				//var gender=[gender[0].name, gender[0].value];
				//console.log(gender);
				return false;
			});

		});
	}

);