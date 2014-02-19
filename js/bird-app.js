/*
	Quiz # 2 - Bird Quiz (Based on the Moon Quiz) with New Features
	http://javascriptissexy.com/how-to-learn-javascript-properly/
    Learn JavaScript Properly

    http://www.reddit.com/r/learnjavascript/comments/1ceefw/learn_javascript_properly_omnibus_post/
*/

$(document).ready(function() {

	$.getJSON('birds.json', function(data){
		
		console.log(data);
		/*
		$.each(data.birds, function(i, v){
			console.log(v.question[0]);
		});
*/
	});
	
});

/*
DIRECTIONS:
http://javascriptissexy.com/how-to-learn-javascript-properly/
Learn JavaScript Properly
-------------------------
Improve Your Quiz Application From Earlier:
— Add client-side data validation: make sure the user answers each question before proceeding to the next question.
— Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
— Use jQuery to add animation (fade out the current question and fade in the next question).
— Test the quiz on IE 8 and 9, and fix any bugs. This will give you a good workout ;)
— Store the quiz questions in an external JSON file.
— Add user authentication: allow users log in, and save their login credentials to local storage (HTML5 browser storage).
— Use cookies to remember the user, and show a “Welcome, First Name” message when the user returns to the quiz.
*/