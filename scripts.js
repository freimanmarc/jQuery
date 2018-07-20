$(function() { 	$('#main-content').css('background-color', 'red');
 	$('#switch-theme').addClass('special');

 	$('#switch-theme').click(() => {
 		$('#main-content').css('background-color', 'lightblue');
 		$('p').each((index, element) => {
 			$(element).css('font-family', 'Courier');
 			$(element).css('font-size', '100px');
 		})
 	})
 });
