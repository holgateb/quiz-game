var timeEl = document.querySelector('#timer')
var start = document.querySelector('#start')
var questions = document.querySelector('#questions')
var Q = document.querySelector('#Q')
var startBtn = document.querySelector('#startBtn')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var recordScoreBtn = document.querySelector('#recordScoreBtn')
var time = 75;
var qPointer = 0

var questionsArray = [
    {
    question: "What is the element called that forms a search pattern out of a sequence of characters?",
    answers: ["RegExp or Regular Expression", "Event", "Boolean Variable", "Conditional Argument"],
    correct: "RegExp or Regular Expression",
    }
    {
    question: "JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.",
    answers: ["Show", "Display", "Speak", "Output"],
    correct: "Output",
    }
    {
    question: "What is the default behavior called that is used to move declarations to the top of the current scope?",
    answers: ["Jumping", "Arranging", "Hoisting", "Sorting"],
    correct: "Hoisting",
    }
    {
    question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
    answers: ["Comments", "Notes", "Quotations", "Comparisons"],
    correct: "Comments",
    }    
    { 
    question: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    answers: ["Events", "RegExp", "Boolean", "Condition"],
    correct: "Events",
    }
   ];

//Function 'startgame'

function startGame(){
    //hide intro
    start.classList.add("hide");
    //show questions
    questions.classList.remove("hide");
    //
    //start timer
    var timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
    
        if(time === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage("Time is Up");

          endGame();
        }
    
      }, 1000);

displayCurrentQuestion();
}

//function 'displayCurrentQuestion'

function displayCurrentQuestion (){
    var currentQuestion = questionsArray[qPointer]
}

//function 'answerquestion'

function answerQuestion(){
    //check if answer is correct
    if(answers === correct);
        time++;
        //IF the answer is wrong
    else(answers != correct);
        //THEN subtract time from countdown
        time--;
    //currentQuestion++
    currentQuestion++;

    //IF passed last question
    if(qPointer >= 5)
        //THEN endGame();
        endGame();
    //ELSE displayCurrentQuestion();
    else(displayCurrentQuestion);
    
}

function endGame(){
    //hide questions
    questions.classList.add("hide");
    //show highscore
    highscores.classList.remove("hide");
    }

//function recordScore
function recordScore(){

    recordScoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
      
        var name = document.querySelector("#name").value;
        var score = document.querySelector("#score").value;
      
        if (name === "") {
          displayMessage("error", "Initials cannot be blank");
        }  else {
          displayMessage("Score Recorded");
      
          localStorage.setItem("Name", name);
          localStorage.setItem("Score", score);
          renderLastRegistered();
        }
      });
}

startBtn.addEventListener("click", startGame);
recordScoreBtn.addEventListener("click", recordScore)