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
var displayEl = document.querySelector('#displayText')
var time = 75;
var qPointer = 0
var timerInterval;

var questionsArray = [
    {
    question: "What is the element called that forms a search pattern out of a sequence of characters?",
    answers: ["RegExp or Regular Expression", "Event", "Boolean Variable", "Conditional Argument"],
    correct: "RegExp or Regular Expression",
    },
    {
    question: "JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.",
    answers: ["Show", "Display", "Speak", "Output"],
    correct: "Output",
    },
    {
    question: "What is the default behavior called that is used to move declarations to the top of the current scope?",
    answers: ["Jumping", "Arranging", "Hoisting", "Sorting"],
    correct: "Hoisting",
    },
    {
    question: "What is the element used, and hidden, in code that explains things and makes the content more readable?",
    answers: ["Comments", "Notes", "Quotations", "Comparisons"],
    correct: "Comments",
    },   
    { 
    question: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    answers: ["Events", "RegExp", "Boolean", "Condition"],
    correct: "Events",
    },
   ];

//Function 'startgame'

function startGame(){
    //hide intro
    start.classList.add("hide");
    //show questions
    questions.classList.remove("hide");
    //
    //start timer
     timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
    
        if(time === 0) {
        
             endGame();
        }
    
      }, 1000);

displayCurrentQuestion();
}

//function 'displayCurrentQuestion'

function displayCurrentQuestion() {
    var currentQuestion = questionsArray[qPointer];
  Q.textContent = currentQuestion.question

  btn1.textContent = currentQuestion.answers[0]
  btn1.setAttribute('value', currentQuestion.answers[0])
  btn2.textContent = currentQuestion.answers[1]
  btn2.setAttribute('value', currentQuestion.answers[1])
  btn3.textContent = currentQuestion.answers[2]
  btn3.setAttribute('value', currentQuestion.answers[2])
  btn4.textContent = currentQuestion.answers[3]
  btn4.setAttribute('value', currentQuestion.answers[3])
}

function answerQuestion(event){
    
    // console.log(event.target.value)
    // check if the event.target.value is the wrong answer
    if(questionsArray[qPointer].correct !== event.target.value){
        // if the answer is wrong subtract 3 from the time
        time -= 3 
        timeEl.textContent = time;
    }
    //move on to the next question

    qPointer++;

    if(qPointer === questionsArray.length){
        endGame();
    }else{
        displayCurrentQuestion();
    }
}

function endGame(){
    //hide questions
    questions.classList.add("hide");
    //show highscore
    highscores.classList.remove("hide");

      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

//function recordScore
function recordScore(){
 
    recordScoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
      
        var name = document.querySelector("#name").value;
        var score = time;
        console.log()
      

        //fix this
        if (name === "") {
          alert("error", "Initials cannot be blank");
        }  else {
          alert("Score Recorded");

          //record score into array
      
          localStorage.setItem("Name", name);
          localStorage.setItem("Score", score);
          renderLastRegistered();
        }
      });
}

startBtn.addEventListener("click", startGame);
btn1.addEventListener("click", answerQuestion);
btn2.addEventListener("click", answerQuestion);
btn3.addEventListener("click", answerQuestion);
btn4.addEventListener("click", answerQuestion);
recordScoreBtn.addEventListener("click", recordScore)