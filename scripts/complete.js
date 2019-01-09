$(document).ready
(
	function()
	{
		var demographics = $.cookie('race');
		console.log(demographics);
		var gender = $.cookie('gender');
		console.log(gender);
		var trials200ms = $.cookie('emotion200');
		console.log(trials200ms);
		var trials2000ms = $.cookie('emotion2000');
		console.log(trials2000ms);

		$('#mailto').append('<a href="mailto:xxx@xxx.xxx?subject=Expresssions%20of%20Emotion&body='+ demographics +","+ gender+"," + trials200ms + trials2000ms +'">Mail it!</a>');
	}

);
