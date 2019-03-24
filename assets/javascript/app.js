//Global Variables

// Trivia Questions Object
//======================================================================================

var triviaQuestions = [{
    question: "Which restaurant chain was Pam banned from?",
    options: ["Denny's", "Chili's", "Applebees", "IHOP"],
    answer: [1],
},

{
    question: "Who is Michael Scott's favorite actress?",
    options: ["Meryl Streep", "Julia Roberts", "Nicole Kidman", "Anne Hathaway"],
    answer: [0]
},

{
    question: "What is the name of the security guard?",
    options: ["Frank", "Bob", "Hank", "Greg"],
    answer: [2],
},

{
    question: "Whose car is hit with a watermelon during safety training?",
    options: ["Stanley", "Creed", "Jim", "Meredith"],
    answer: [0],
},

{
    question: "What does Jim put for Dwight's middle name on his ID badge?",
    options: ["Butts", "Fart", "Danger", "Wait for it"],
    answer: [0],
},

{
    question: "Who has two thumbs and hates Todd Packer?",
    options: ["Pam", "Michael Scott", "Phyllis", "Jim"],
    answer: [3],
},

{
    question: "Who is the main character in Threat Level Midnight?",
    options: ["Michael Scarn", "Nicolas Cage", "Michael Scorpio", "Michael Buble"],
    answer: [0],
},

{
    question: "What did Dwight dress up as in the first Halloween episode?",
    options: ["Beet farmer", "A Sith Lord", "Jim", "Spock"],
    answer: [1],
}];

// Testing object
console.log(triviaQuestions);

var currentQuestion = 0;
var correctGuesses = 0;


var incorrectGuesses = 0;
var unanswered;
var answered;

var timer = 30;
var index;
var userGuess = [];





// Game functions
//======================================================================================

// Function for game countdown
function countdown(){
	seconds = 30;
	$('#timer').html('<h2>Time Remaining: ' + seconds + '</h2>');
	answered = true;
	// Sets timer to countdown by seconds
	time = setInterval(showCountdown, 1000);
}

// Function to show game countdown
function showCountdown(){
	seconds--;
    $('#timer').html('<h2>Time Remaining: ' + seconds + '</h2>');
    // Clears timer at less than 1 second
	if(seconds < 1){
		clearInterval(time);
	}
}

// Function to stop timer
function stopTimer() {
    running = false;
    clearInterval(time);
};

// Function to load a question and options
function showQuestion() {
    $('#question').html(parseInt(currentQuestion) + 1 + ". " + triviaQuestions[currentQuestion].question);
    var options = triviaQuestions[currentQuestion].options;
    var radioButton = '';
    for (var i = 0; i < options.length; i++) {
      radioButton += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
        triviaQuestions[currentQuestion].options[i] + '</label></div><br/>';
    }
    $('#options').html(radioButton);
  };




// Game begins
//======================================================================================

// Makes function available after page loads
$(document).ready(function(){


// Creates start button 
var startButton = document.createElement("button");
// Adds text to button
startButton.innerHTML = "Start Game";

// Adds to the DOM
$('#start').html(startButton);

// Click event to start timer, hide start button, and load first question
$('#start').on('click', function () {
    // Hides start button on click
    $(this).hide();
    // Calls countdown function
    countdown();
    showQuestion();
});







// If user guesses correctly, show "correct!" and image for 5 seconds
// If user guess incorrectly, show "incorrect!," correct answer, and image for 5 seconds
// If user does not guess, show correct answer for 5 seconds

// After 5 seconds, user is taken to second question, repeat process 

/* After user has gone through all 10 questions, they are taken to a summary that shows
correct guesses, incorrect guesses, and unanswered questions, along with a start over button 
to reset the entire game */

})