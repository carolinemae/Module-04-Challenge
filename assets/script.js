var timerEl = document.getElementById('countdown');
var title = document.getElementById("title");
var recordScoreForm = document.getElementById('recordScore');
var submitBtn = document.getElementById('submit');
var initials = 'testInitials';
var startBtn = document.createElement("button");
var quizEl = document.createElement("div");
var timerEnd = document.createElement("div");
var showScore = document.createElement("div");
var tryAgainBtn = document.createElement("button");
var timeLeft = 60;
var score = 0;

document.body.appendChild(quizEl);
document.body.appendChild(startBtn);
title.textContent = "Coding Quiz Challenge";
startBtn.innerHTML = "Start Quiz";
quizEl.setAttribute = ("id","quiz");

function countdown() {
    timerEl.style.display = "block";
    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);

            outOfTime();
        }
    }, 1000);
}

function outOfTime() {
    timerEnd.style.display = "block";
    timerEnd.setAttribute("id","outOfTime");
    timerEnd.textContent = "You're out of time";
    document.body.appendChild(timerEnd);
    tryAgainBtn.style.display = "block";
    quizEl.style.display='none';

    printScore();
    tryAgain();
}

function printScore() {
    var finalTime = timeLeft;
    var finalScore = parseFloat(score) + parseFloat(finalTime);
    showScore.textContent = "Your final score is: " + finalScore;
    quizEl.style.display = "none";
    timerEl.style.display = "none";
    showScore.style.display = "block";
    recordScoreForm.style.display = "block";
    document.body.appendChild(showScore);
    document.body.appendChild(recordScoreForm);
    console.log(finalTime);
    console.log(finalScore);

    submitBtn.addEventListener('click', function() {
        localStorage.setItem(initials.value, finalScore);
        
    });

    tryAgain();
}

function runQuestions() {
    var questions = ["Inside which HTML element do we put Javascript?","The external JavaScript file must contain the < script > tag","How do you write 'Hello World' in an alert box?","How do you create a function in JavaScript?","How do you call a function Name 'myFunction'?","How to write an IF statement in JavaScript?","How can you add a comment in a JavaScript?"];
    var answers0 = ["<javascript>","<scripting>","<script>","<js>"];
    var answers1 = ["True","False"];
    var answers2 = ["alert('Hello World');","alertBox('Hello World');","msgBox('Hello World');","msg('Hello World');"];
    var answers3 = ["function myFunction()","function = myFunction()","function:myFunction()"];
    var answers4 = ["myFunction()","call function myFunction()","call myFunction()"];
    var answers5 = ["if (i == 5)","if i == 5 then","if i = 5","if i = 5 then"];
    var answers6 = ["//This is a comment","<!--This is a comment-->","'This is a comment */"];
    quizEl.style.display = "block";

    function runQuestion0() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 2;

        quizEl.style.display = "block";
        timerEnd.style.display = "none";
        recordScoreForm.style.display = "none";
        quizEl.innerHTML = questions[0];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');

        for (var i = 0; i < answers0.length; i++) {
            var answers = answers0[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;

            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);

              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);

              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion1();
            }
          });
    }

    function runQuestion1() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 1;
    
        quizEl.innerHTML = questions[1];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers1.length; i++) {
            var answers = answers1[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion2();
            }
          });
    }
    
    function runQuestion2() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 0;
    
        quizEl.innerHTML = questions[2];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers2.length; i++) {
            var answers = answers2[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion3();
            }
          });
    }
    
    function runQuestion3() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 0;
    
        quizEl.innerHTML = questions[3];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers3.length; i++) {
            var answers = answers3[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion4();
            }
          });
    }
    
    function runQuestion4() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 0;
    
        quizEl.innerHTML = questions[4];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers4.length; i++) {
            var answers = answers4[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion5();
            }
          });
    }
    
    function runQuestion5() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 0;
    
        quizEl.innerHTML = questions[5];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers5.length; i++) {
            var answers = answers5[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }
              runQuestion6();
            }
          });
    }
    
    function runQuestion6() {
        var questionsList = document.createElement("ul")
        var correctAnswer = 0;
    
        quizEl.innerHTML = questions[6];
        quizEl.appendChild(questionsList);
        questionsList.setAttribute('id','answers');
    
        for (var i = 0; i < answers6.length; i++) {
            var answers = answers6[i];
            var answersLi = document.createElement("li");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answers;
            answersLi.setAttribute("data-index", i);
            questionsList.appendChild(answersLi);
            answersLi.appendChild(answersBtn);
        }
      
        questionsList.addEventListener("click", function(event) {
            var element = event.target;
    
            if (element.matches("button") === true) {
              var answerInput = element.parentElement.getAttribute("data-index");
              console.log(answerInput);              
    
              if (answerInput == correctAnswer) {
                console.log('answer is correct!');
                score = score+1;
                console.log("score is: " + score);
    
              } else {
                console.log('answer is incorrect!');
                score = score-1;
                console.log("score is: " + score);
              }

            }

            printScore();
          });
    }

    countdown();
    runQuestion0();
}

function tryAgain() {
    tryAgainBtn.style.display = "block";
    tryAgainBtn.setAttribute("id","tryAgain");
    tryAgainBtn.innerHTML = "Try Again";
    document.body.appendChild(tryAgainBtn);

    tryAgainBtn.addEventListener("click", function() {
        title.textContent = "";
        quizEl.style.display = "block";
        showScore.style.display = "none";
        tryAgainBtn.style.display = "none";

        runQuestions();
    });
}

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    title.textContent = "";
    runQuestions();
});