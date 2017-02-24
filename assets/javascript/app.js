$(document).ready(function() {
  
	// Star Trek Trivia Questions - mainly TNG onwards
var trivia = {
  question1: {    
    question: "What is the name of Data\'s cat?",
    possibleAnswers: ["Spot", "Sammy", "Jax", "Garfield"],
    correctAnswer: "Spot",
    quote: '"And though you are not sentient, Spot, and do not comprehend, I nonetheless consider you a true and valued friend."',
    quoteSource: "Data, reciting Ode to Spot in 2369"
  },
  question2: {
    question: "In \"Star Trek: First Contact\", Riker mistakenly identifies a piece of music as being composed by which musician?",
    possibleAnswers: ["Berlioz", "Bizet", "Brahms", "Bruckner"],
    correctAnswer: "Bizet"
  },
  question3: {
    question: "In the two-part episode \"Chain of Command\", how many lights can Captain Picard see?",
    possibleAnswers: ["Three", "Four", "Five", "Six"],
    correctAnswer: "Four"
  },
  question4: {
    question: "Insurrection, picard dance",
    possibleAnswers: ["Mambo", "Foxtrot", "Waltz", "Rumba"],
    correctAnswer: "Mambo"
  },
  question5: {
    question: "Which of these characters from TOS <strong><em>did not</em></strong> make an appearance in any TNG episode?",
    possibleAnswers: ["Kirk", "Spock", "McCoy", "Scotty"],
    correctAnswer: "Kirk"
  },
  question6: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question7: {
    question: "",
    possibleAnswers: [],
    correctAnswer:""
  },
  question8: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question9: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question10: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question11: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question12: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question13: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question14: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question15: {
    question: "",
    possibleAnswers: [],
    correctAnswer:""
  },
  question16: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question17: {
    question: "",
    possibleAnswers: [],
    correctAnswer:"" 
  },
  question18: {
    question: "",
    possibleAnswers: [],
    correctAnswer:""
  },
  question19: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  },
  question20: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
  }
};


var questionArray = [];
var questionNumber = 0;
var currentQuestion;
var timerCount;
var countdown;



//console.log(first)


function getRandomQuestions() {
	var tempQList = Object.keys(trivia);
  do {
    var randomQName = tempQList[Math.floor(Math.random()*(tempQList.length-1))];
    if (questionArray.indexOf(randomQName) === -1) {
      questionArray.push(randomQName);
    }
  }
  while (questionArray.length < 5);
}
getRandomQuestions();
//console.log(tempQList);
//console.log(tempQList.length)
console.log(questionArray)

function displayQuestion() {
	currentQuestion = questionArray[questionNumber];
	console.log(currentQuestion);
	console.log(trivia[currentQuestion]["question"]); //if currentQuestion is a string then I can't seem to use dot notation due to the "" in the string
  $(".question").html(trivia[currentQuestion]["question"]);
}

function displayNextQuestion() {
  if (questionNumber < questionArray.length) {
    displayQuestion();
    displayPossibleAnswers();
    resetTimer();
    startTimer();
    checkAnswer();
  }
}

function displayPossibleAnswers() {
	console.log(trivia[currentQuestion]["possibleAnswers"])
  var answerList = trivia[currentQuestion]["possibleAnswers"];
  for (var i = 0; i < answerList.length; i++) {
    var answerButton = $("<button>");
    answerButton.addClass("answer");
    answerButton.attr("pos-answer", answerList[i]);
    answerButton.html("<p>" + answerList[i] + "</p>");
    $(".answers").append(answerButton);
  }
}

function checkAnswer() {
  $(".answers").on("click", ".answer", function() {
    stopTimer();
    $(".answers").empty();
    if ($(this).attr("pos-answer") === trivia[currentQuestion]["correctAnswer"]) {
      displayCorrectAnswer();
    } else {
      displayWrongAnswer();
    }
    setTimeout(displayNextQuestion, 5000);
  });
}

function displayCorrectAnswer() {
	console.log("Correct!");
  questionNumber++;
}

function timer() {
	timerCount--;
	console.log(timerCount);
	outOfTime();
	$(".timer").html(timerCount);
}

function startTimer() {
	$(".timer").html(timerCount);//display starting time here
	console.log(timerCount);
	countdown = setInterval(timer, 1000);
}

function stopTimer() {
	clearInterval(countdown);
}

function outOfTime() {
	if (timerCount === 0) {
		clearInterval(countdown);
    console.log("Time\'s up!");
    questionNumber++;
    setTimeout(displayNextQuestion, 5000);
	}
}

function displayWrongAnswer() {
  console.log("wrong! The correct answer is " + trivia[currentQuestion]["correctAnswer"]);
  questionNumber++;
}

function resetTimer() {
  timerCount = 5;
}

//displayQuestion();
//displayPossibleAnswers();
//resetTimer();
//startTimer();
//checkAnswer();

displayNextQuestion();


});