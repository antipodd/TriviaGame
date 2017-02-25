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
    question: "In \"Star Trek: Insurrection\", what music does Picard request the computer play",
    possibleAnswers: ["Mambo", "Sonata", "Waltz", "Rumba"],
    correctAnswer: "Mambo"
  },
  question5: {
    question: "Which of these characters from TOS <strong><em>did not</em></strong> make an appearance in any TNG episode?",
    possibleAnswers: ["Kirk", "Spock", "McCoy", "Scotty"],
    correctAnswer: "Kirk"
  },
  question6: {
    question: "Which actor guest stars as Captain Morgan Bateson in the episode \"Cause and Effect\"?",
    possibleAnswers: ["Samuel L. Jackson","Kelsey Grammar", "James Cromwell", "Jason Alexander"],
    correctAnswer: "Kelsey Grammar"
  },
  question7: {
    question: "Which ship picked up Picard and Riker after the crash landing of the <em>Enterprise</em>-D?",
    possibleAnswers: ["U.S.S. Farragut", "U.S.S. Hood", "U.S.S. Excelsior", "U.S.S. Melbourne"],
    correctAnswer:"U.S.S. Farragut"
  },
  question8: {
    question: "The destruction of which colony signaled the beginning of the Borg invasion that led to the Battle of Wolf 359?",
    possibleAnswers: ["New Providence", "New New York", "New Concord", "New Albany"],
    correctAnswer: "New Providence"
  },
  question9: {
    question: "What is the registry number of the U.S.S. Pegasus?",
    possibleAnswers: ["NX-72307", "NCC-53847", "NCC-65550", "NX-60147"],
    correctAnswer: "NCC-53847"
  },
  question10: {
    question: "What disease did Barclay have named after him?",
    possibleAnswers: ["Barclay\'s Protomorphosis Syndrome", "Barclay\'s Legato Infection", "Barclay\'s Auroral Plague", "Barclay\'s Transporter Psychosis"],
    correctAnswer: "Barclay\'s Protomorphosis Syndrome"
  },
  question11: {
    question: "Who does Wesley Crusher leave the Enterprise-D with?",
    possibleAnswers: ["Captain Picard", "The Traveler", "The Passenger", "Beverly Crusher"],
    correctAnswer: "The Traveler"
  },
  question12: {
    question: "What was the name of Cochrane\'s warp vessel?",
    possibleAnswers: ["Wyvern", "Griffin", "Basilisk", "Phoenix"],
    correctAnswer: "Phoenix"
  },
  question13: {
    question: "Which starship discovered Data?",
    possibleAnswers: ["U.S.S. Yorktown", "U.S.S. Enterprise-C", "U.S.S. Tripoli", "U.S.S. Stargazer"],
    correctAnswer: "U.S.S. Tripoli"
  },
  question14: {
    question: "What did some Enterprise-D crew call Lieutenant Barclay?",
    possibleAnswers: ["Lieutenant Brussell Sprout", "Lieutenant Broccoli", "Lieutenant Spinach", "Lieutenant Potato" ],
    correctAnswer: "Lieutenant Broccoli"
  },
  question15: {
    question: "What did Worf refer to as \"a warrior\'s drink\"?",
    possibleAnswers: ["Blood Wine", "Orange Juice", "Prune Juice", "Raktajino"],
    correctAnswer:"Prune Juice"
  },
  question16: {
    question: "What Starfleet Academy squadron did Wesley Crusher join?",
    possibleAnswers: ["Red Squadron", "Nova Squadron", "Omega Squadron", "Alpha Squadron"],
    correctAnswer: "Nova Squadron"
  },
  question17: {
    question: "What was the day of Earth\'s first contact with an alien species?",
    possibleAnswers: ["April 25th, 2045", "March 14th, 2049", "April 5th, 2063", "October 9th, 2161"],
    correctAnswer:"April 5th, 2063" 
  },
  question18: {
    question: "Which theoretical physicist played himself in a holgraphic poker game with Data, Einstein and Isaac Newton?",
    possibleAnswers: ["Steven Hawking", "Brian Greene", "Michio Kaku", "Peter Higgs"],
    correctAnswer:"Steven Hawking"
  },
  question19: {
    question: "What race did Captain Picard say he would not send backwards \"into superstition and fear\"?",
    possibleAnswers: ["Tamarian", "Mintakan", "Bolian", "Tholian"],
    correctAnswer: "Mintakan"
  },
  question20: {
    question: "What three toxic chemicals filled Earth\'s atmosphere when the Borg changed history?",
    possibleAnswers: ["Xenon, carbon dioxide and sulfer hexafluoride", "Methane, carbon monoxide and fluorine", "Chlorine, ozone and phosphine", "Neon, promethium, iodine"],
    correctAnswer: "Methane, carbon monoxide and fluorine"
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
    $(".answers").empty();
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