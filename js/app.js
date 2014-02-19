/*
    Quiz Tutorials:
    http://shop.oreilly.com/product/0636920015048.do
    JavaScript & jQuery: The Missing Manual, 2nd Edition
    Completed Example: page 490

    http://javascriptissexy.com/how-to-learn-javascript-properly/
    Learn JavaScript Properly

    http://www.reddit.com/r/learnjavascript/comments/1ceefw/learn_javascript_properly_omnibus_post/
*/
$(document).ready(function(){

    var score = 0;
    var count = 0; // tracks the question #% for the progress bar

    var quiz = [
        ['How many moons does Earth have?', 1, [0,1,2,3]],
        ['How many moons does Saturn have?', 31, [0,14,31,160]],
        ['How many moons does Venus have?', 1, [0,1,11,15]],
        ['How many moons does Jupiter have?', 67, [62,67,78,136]],
        ['How many moons does Neptune have?', 14, [2,6,14,21]]
    ];

    var totalQuestion = quiz.length; //get total number of questions

    function askQuestion() {
        $('#result').removeClass(); // reset the alert for the result response

        var currentQuestion = quiz.pop(); //get the question text
        $('#question').text(currentQuestion[0]); // create the question text

        var answers = createAnswers(currentQuestion[2]); // call createAnswers to create radio buttons
        $('#answers').html(answers); // create the answers text and radio buttons

        count++;
        console.log('Count: ' + count);

        $('#answers input').click(function() {
            if ( $(this).val() == currentQuestion[1] ) {
                score++;
                console.log('Score: ' + score);
                $('#result').prepend('<h4>That is correct!</h4>').addClass('alert alert-success');
            } else {
                $('#result').prepend('<h4>That is incorrect. The correct answer is '
                    + currentQuestion[1] + '</h4>').addClass('alert alert-danger');
            }
            $('#next').show(); // show the next button
        });
    }

    function createAnswers(answers) {
        var answerOutput = '';

        for (i = 0; i < answers.length; i++) {
            answerOutput += '<div class="radio"><label><input name="quiz" type="radio" value="'
                + answers[i]
                + '">'
                + answers[i]
                + '</label></div>';
        }

        return answerOutput;
    }

    function createResults() {
        var good = '<h3>You really know your moons!</h3>';
        var bad = '<h3>You need to study your moons! Try <a href="http://www.wikipedia.org/">Wikipedia</a></h3>';
        var results = '<p>You got <strong>'
            + score
            + '</strong> out of <strong>'
            + totalQuestion
            + '</strong> questions correct.</p>';

        if (totalQuestion == score) {
            $('#quiz').html(good + results);
        } else {
            $('#quiz').html(bad + results);
        }

        $('.progress-bar').removeClass('progress-bar-warning');
        $('.progress-bar').addClass('progress-bar-success');
    }

    function progressBar() {

        $('.progress-bar').css('width', function() {

            return  100 / totalQuestion * count + '%';
        });

        $('.progress-bar').addClass('progress-bar-warning');
    }

    // Next button
    $('#next').click(function() {
        $(this).hide();
        $('#result').text('');

        if (quiz.length == totalQuestion) {
            $(this).val('Next Question >>');
        } else if (quiz.length == 1) {
            $(this).val('Show Results').removeClass('btn-warning').addClass('btn-success');
        }

        if (quiz.length > 0) {
            askQuestion();
            progressBar();
        } else {
            createResults();
        }
    });
});
/*
DIRECTIONS:
http://javascriptissexy.com/how-to-learn-javascript-properly/
Learn JavaScript Properly
-------------------------
*   It is a simple quiz that has radio button choices, and it will show the user her score upon completion.
*   The quiz can show any number of questions and any number of choices.
*   Tally the user’s score and display the final score on the last page. The last page will only show the score, so remove the last question.
*   Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object.
*   Dynamically (with document.getElementById or jQuery) add the next question and remove the current question from the screen, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.
*/