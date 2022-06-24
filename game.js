var timeEl = document.querySelector('#timer')
var start = document.querySelector('#start')
var questions = document.querySelector('#questions')
var Q = document.querySelector('#Q')
var startBtn = document.querySelector('#startBtn')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')


var currentQuestion = 0
var questionsArray = []
var time = 75;

//Function 'startgame'

function startGame(){
    //hide intro
    start.classList.add("hide");
    //show questions
    questions.classList.remove("hide");
    //start timer
    var timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
    
        if(time === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage();
        }
    
      }, 1000);

displayCurrentQuestion();
}

//function 'displayCurrentQuestion'

function displayCurrentQuestion (){

}

//function 'answerquestion'

function endGame(){
    
}

//function recordScore

function recordScore(){

}

startBtn.addEventListener("click", startGame);


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score