$(document).ready(function() {
  
	// Star Trek Trivia Questions - mainly TNG onwards
var trivia = {
  "question1": {    
    "question": "What is the name of Data\'s cat?",
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
    possibleAnswers: [],
    correctAnswer: "The Mambo"
  },
  question5: {
    question: "",
    possibleAnswers: [],
    correctAnswer: ""
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
var timerCount = 30;
var countdown;



//console.log(first)


function getRandomQuestions() {
	var tempQList = Object.keys(trivia);
	for (var i = 0; i < 5;) {
		var randomQName = tempQList[Math.floor(Math.random()*(tempQList.length-1))];
		//console.log(tempQList[Math.floor(Math.random()*(tempQList.length-1))]);
		//questionArray.push(randomQName);
		if (questionArray.indexOf(randomQName) === -1) {
			questionArray.push(randomQName);
			i++ //only increment once new question is pushed into question array.
		}

	}
}
getRandomQuestions();
//console.log(tempQList);
//console.log(tempQList.length)
console.log(questionArray)

function displayQuestion() {
	currentQuestion = questionArray[questionNumber];
	console.log(currentQuestion);
	console.log(trivia[currentQuestion]["question"]); //if currentQuestion is a string then I can't seem to use dot notation due to the "" in the string
}

function displayPossibleAnswers() {
	console.log(trivia[currentQuestion]["possibleAnswers"])
}

function displayCorrectAnswer() {
	console.log(trivia[currentQuestion]["correctAnswer"])
}

function timer() {
	timerCount--;
	console.log(timerCount);
	outOfTime();
	//display timer here
}

function startTimer() {
	//display starting time here
	console.log(timerCount);
	countdown = setInterval(timer, 1000);
}

function stopTimer() {
	clearInterval(countdown);
}

function outOfTime() {
	if (timerCount === 0) {
		clearInterval(countdown)
	}
}

function timeConverter(t) { //don't need this, could just show timercount

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

displayQuestion();
displayPossibleAnswers();
startTimer();


});