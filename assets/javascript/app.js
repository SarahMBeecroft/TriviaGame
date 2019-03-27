// Trivia Questions Object
//======================================================================================

var triviaQuestions = [{
    question: "Which restaurant chain was Pam banned from?",
    options: ["Denny's", "Chili's", "Applebees", "IHOP"],
    answer: [1],
    answerName: "Chili's",
    answerImage: "../assets/images/chilis.png"
},

{
    question: "Who is Michael Scott's favorite actress?",
    options: ["Meryl Streep", "Julia Roberts", "Nicole Kidman", "Anne Hathaway"],
    answer: [0],
    answerName: "Meryl Streep"
},

{
    question: "What is the name of the security guard?",
    options: ["Frank", "Bob", "Hank", "Greg"],
    answer: [2],
    answerName: "Hank"
},

{
    question: "Whose car is hit with a watermelon during safety training?",
    options: ["Stanley", "Creed", "Jim", "Meredith"],
    answer: [0],
    answerName: "Stanley"
},

{
    question: "What does Jim put for Dwight's middle name on his ID badge?",
    options: ["Butts", "Fart", "Danger", "Wait for it"],
    answer: [0],
    answerName: "Fart"
},

{
    question: "Who has two thumbs and hates Todd Packer?",
    options: ["Pam", "Michael Scott", "Phyllis", "Jim"],
    answer: [3],
    answerName: "Jim"
},

{
    question: "Who is the main character in Threat Level Midnight?",
    options: ["Michael Scarn", "Nicolas Cage", "Michael Scorpio", "Michael Buble"],
    answer: [0],
    answerName: "Michael Scarn"
},

{
    question: "What did Dwight dress up as in the first Halloween episode?",
    options: ["Beet farmer", "A Sith Lord", "Jim", "Spock"],
    answer: [1],
    answerName: "A Sith Lord"
}];

// Testing object
console.log(triviaQuestions);


// Global Variables
//======================================================================================

var timer = 30;
var intervalId;
var currentQuestion = 0;
var results = $('#gameresults');
var submitButton = $("#submit");
var index;
var userGuess = [];

var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 3;
var submitButton


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


    // Creates submit button 
    var submitButton = document.createElement("button");
    // Adds text to button
    submitButton.innerHTML = "Submit Answer";
    // Adds to the DOM
    $('#submit').html(submitButton);

    checkAnswer();

};


// Function to gather user's choice, stop timer and check answer
function checkAnswer() {

    // Click event to stop timer and check answer when user hits submit button
    $('#submit').on('click', function () {
      stopTimer();
      checkAnswer();
 


      // Takes value from button user clicks
      var userGuess = ($(this).attr("value"));

      // Converts string to integer
      userGuess = parseInt(userGuess);

      // Stops timer
      stopTimer();

      // Checks to see if user's guess matches correct answer
      if (userGuess == triviaQuestions[currentQuestion].answer) {
          $('#gamemessage').text("That is correct!");
          $("#image").html(answerImage);
          // Adds plus one to correct guesses
          correctGuesses++;
      } else if (userGuess !== triviaQuestions[currentQuestion].answer) {
          answer =
              $('#gamemessage').text("Wrong! The correct answer was " + triviaQuestions[currentQuestion].answerName + '.');
          // Adds plus one to incorrect guesses
          incorrectGuesses++
      } else {
          // Adds plus on to unanswered if user doesn't click on any of the options
          unanswered++;
      };

  });

}


// Function to show results or go to next question
function resultsPage() {
    if (currentQuestion === 8) {
        $('#gameresults').html(correctAnswers);
        $('#gameresults').html(incorrectAnswers);
        $('#question').empty();
        $('#options').empty();
        $('#timer').empty();
    }
    else {
        showQuestion();
        checkAnswer();
    };
};



// Game begins
//======================================================================================

// Makes function available after page loads
$(document).ready(function () {

    // Hides timer  
    $('#timer').hide();

    // Creates start button 
    var startButton = document.createElement("button");
    // Adds text to button
    startButton.innerHTML = "Start Game";
    // Adds to the DOM
    $('#start').html(startButton);


    // Click event to start timer, hide start button, and load first question
    $('#start').on('click', function () {

        // Shows timer
        $('#timer').show();

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