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
    answer: [0],
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


// Global Variables
//======================================================================================

var timer = 30;
var intervalId;
var currentQuestion = 0;
// var quizContainer = $('#quiz');
var results = $('#gameresults');
var submitButton = $("#submit");
var index;
var userGuess = [];

var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 3;


// Game functions
//======================================================================================

// Function for game countdown
function countdown() {
    seconds = 30;
    // Shows user time remaining in seconds
    $('#timer').html('<h2>Time Remaining: ' + seconds + '</h2>');
    answered = true;
    // Sets timer to countdown by seconds
    time = setInterval(showCountdown, 1000);
}

// Function to show game countdown
function showCountdown() {
    seconds--;
    $('#timer').html('<h2>Time Remaining: ' + seconds + '</h2>');
    // Clears timer at less than 1 second
    // Add mechanism to stop on click event
    if (seconds < 1) {
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
    // Adds current question to question ID in HTML
    $('#question').html(parseInt(currentQuestion) + 1 + ". " + triviaQuestions[currentQuestion].question);
    // Creates variable for list of options
    var options = triviaQuestions[currentQuestion].options;
    // Creates radio button for options
    var radioButton = '';
    for (var i = 0; i < options.length; i++) {
        radioButton += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            triviaQuestions[currentQuestion].options[i] + '</label></div><br/>';
    }
    $('#options').html(radioButton);
    // Checks to see which option user checks
    $("#option0").prop('checked', true);
};




// Function to gather user's choice, stop timer and check answer
function checkAnswer() {
    $(document).on("click", "input[name=option]:checked", function () {

        // Takes value from button user clicks
        var userGuess = ($(this).attr("value"));

        // Converts string to integer
        userGuess = parseInt(userGuess);

        // Stops timer
        stopTimer();

        // Checks to see if user's guess matches correct answer
        if (userGuess == triviaQuestions[currentQuestion].answer) {
            // Alert for testing purposes
            $('#gamemessage').text("That is correct!");
            // Adds plus one to correct guesses
            correctGuesses++;
        } else if (userGuess !== triviaQuestions[currentQuestion].answer) {
            answer =
                $('#gamemessage').text("Wrong! The correct answer was " + triviaQuestions[currentQuestion].options[currentQuestion + 1] + '.'); // Shows string instead of index for correct answer  
            // Adds plus one to incorrect guesses
            incorrectGuesses++;

        } else {
            // Adds plus on to unanswered if user doesn't click on any of the options
            unanswered++;
        };

    });

    // sdfsdfdsf
    if (currentQuestion === triviaQuestions.length - 1) {
        setTimeout(results, 3 * 1000);
    } else {
        setTimeout(game.nextQuestion, 3 * 1000);
    }
}




// Game begins
//======================================================================================

// Makes function available after page loads
$(document).ready(function () {

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
        checkAnswer();
    });







    // If user guesses correctly, show "correct!" and image for 5 seconds
    // If user guess incorrectly, show "incorrect!," correct answer, and image for 5 seconds
    // If user does not guess, show correct answer for 5 seconds

    // After 5 seconds, user is taken to second question, repeat process 

    /* After user has gone through all 10 questions, they are taken to a summary that shows
    correct guesses, incorrect guesses, and unanswered questions, along with a start over button 
    to reset the entire game */

})