// $(document).ready(function() {
// 	var leftUIEl = $( '.carousel-arrow-left' );
// 	var rightUIEl = $( '.carousel-arrow-right' );
// 	var elementsList = $('.carousel-list');
 
//     var pixelsOffset = 125;
//     var currentLeftValue = 0;
//     var elementsCount = elementsList.find('li').length;
//     var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
//     var maximumOffset = 0;
 
//     leftUIEl.click(function() {        
//         if (currentLeftValue != maximumOffset) {
//             currentLeftValue += 125;
//             elementsList.animate({ left : currentLeftValue + "px"}, 500);
//         }        
//     });
 
//     rightUIEl.click(function() {        
//         if (currentLeftValue != minimumOffset) {
//             currentLeftValue -= 125;
//             elementsList.animate({ left : currentLeftValue + "px"}, 500);
//         }        
//     });
// });
$(function() {
	$("").carousel();
});

$(function() {
	var template = $('#template').html();
	var objects = [
	{number: 'Вопрос№1', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3'},
	{number: 'Вопрос№2', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3'},
	{number: 'Вопрос№3', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3'}
	];
	var content = tmpl(template, {data:objects});
	$('body').append(content);

});