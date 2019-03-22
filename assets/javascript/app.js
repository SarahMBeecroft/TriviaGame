//Global variables

// Game Objects

// Trivia questions
var questions = {
    question1: "Which restaurant chain was Pam banned from?",
    question2: "Who is Michael Scott's favorite actress?",
    question3: "What is printed on Michael's coffee mug?",
    question4: "Who does Angela name her son after?",
    question5: "What is the name of the security guard?",
    question6: "Who's car is hit with a watermelon during safety training?",
    question7: "What does Jim put for Dwight's middle name on his ID badge?",
    question8: "Who has two thumbs and hates Todd Packer?",
    question9: "Who is the main character in Threat Level Midnight?",
    question10: "What did Dwight dress up as in the first Halloween episode?"
}

// Array of options for user to guess from
var options = {
    question1: ["Denny's", "Chili's", "Applebees", "IHOP"],
    question2: ["Meryl Streep", "Julia Roberts", "Nicole Kidman", "Anne Hathaway"],
    question3: ["World's Most Amazing Boss", "World's Greatest Boss", "World's Worst Boss", "World's Best Boss"],
    question4: ["Her father", "Her cat", "Her best friend", "A celebrity"],
    question5: ["Frank", "Bob", "Hank", "Greg"],
    question6: ["Stanley", "Creed", "Jim", "Meredith"],
    question7: ["Butts", "Fart", "Danger", "Wait for it"],
    question8: ["Pam", "Michael Scott", "Phyllis", "Jim"],
    question9: ["Michael Scarn", "Nicolas Cage", "Michael Scorpio", "Michael Buble"],
    question10: ["Beet farmer", "A Sith Lord", "Jim", "Spock"],
}

// Answer key
var answers = {
    question1: ["Chili's"],
    question2: ["Meryl Streep"],
    question3: ["World's Best Boss"],
    question4: ["Her cat"],
    question5: ["Hank"],
    question6: ["Stanley"],
    question7: ["Fart"],
    question8: ["Jim"],
    question9: ["Michael Scarn"],
    question10: ["A Sith Lord"],
}

var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;
var timer = // 30 seconds

// Game pseudocode

// User opens page
// Makes function available after page loads
$(document).ready(function(){



// User clicks on start button to begin game

/* User sees first question and 4 possible answers, timer starts counting down from 
30 seconds  */

// If user guesses correctly, show "correct!" and image for 5 seconds
// If user guess incorrectly, show "incorrect!," correct answer, and image for 5 seconds
// If user does not guess, show correct answer for 5 seconds

// After 5 seconds, user is taken to second question, repeat process 

/* After user has gone through all 10 questions, they are taken to a summary that shows
correct guesses, incorrect guesses, and unanswered questions, along with a start over button 
to reset the entire game */


