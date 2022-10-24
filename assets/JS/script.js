const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const maxQuestions = 11; // Changed max from 10 to 11 so 10 questions are actually asked

let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let questionIndex = 0;
var timeRemaining = true;
var timeStart = false;
var timeEl = document.querySelector("#timer-value");
var timeBar = document.querySelector("#timer-counter");
var counterNumber = document.querySelector("#counter-number");
var secondsLeft = 75;
var champion = [];
var score = [];
let validEntry = false;

// Event Listeners
var click1 = document.querySelector("#choice1");
var click2 = document.querySelector("#choice2");
var click3 = document.querySelector("#choice3");
var click4 = document.querySelector("#choice4");

// Validation that clicks work
click1.addEventListener("click", function(event) {
  answerChecker(event)
});
click2.addEventListener("click", function(event) {
  answerChecker(event)
});
click3.addEventListener("click", function(event) {
  answerChecker(event)
});
click4.addEventListener("click", function(event) {
  answerChecker(event)
});


function answerChecker(event) {
  console.log("Choice D was clicked."); // Console.log for validation during initial set up
  console.log("Question " + (questionIndex -1 ) + " was chosen"); // Console.log for validation during initial set up
  let btnVal = event.target.innerHTML;
  console.log(event.target.innerHTML); // Console.log for validation during initial set up
  // Code should validate if this choice is correct
  console.log("current question:", currentQuestion); // Console.log for validation during initial set up
  if(btnVal == currentQuestion.answer) {
    console.log("Correct!!");
  } else {
    console.log("Incorrect!!");
    if(secondsLeft <= 14) {
      endGame;
    } else {
    secondsLeft -= 15;
    };
  };
  getNewQuestion();
};

// Sounds
var clickSound = document.getElementById("click-sound");
var musicTheme = document.getElementById("theme-music");

let questions = [
  {
    question: "Where does the Triwizard cup transport Harry and Cedric?",
    choice1: "Lord Voldemort's Lair",
    choice2: "Bourgin & Burkes",
    choice3: "The graveyard",
    choice4: "Malfoy Manor",
    answer: "The graveyard",
  },
  {
    question: "What sweets do Fred & George Weasley develop to sell to students looking to skip classes?",
    choice1: "Peppermint Imps",
    choice2: "Skiving Snackboxes",
    choice3: "Acid Pops",
    choice4: "Fudge Flies",
    answer: "Skiving Snackboxes",
  },
  {
    question: "What form does Hermione Granger's Patronus take?",
    choice1: "Swan",
    choice2: "Cat",
    choice3: "Canary",
    choice4: "Otter",
    answer: "Otter",
  },
  {
    question: "What did Hagrid do to Dudley when he first met Harry?",
    choice1: "Gave him a pig's tail",
    choice2: "Set his trousers on fire",
    choice3: "Gave him a ten foot tongue",
    choice4: "Told him off for bullying Harry",
    answer: "Gave him a pig's tail",
  },
  {
    question: "What is Mad Eye Moody's catchphrase?",
    choice1: "Never put your wand in your back pocket!",
    choice2: "Don't trust anyone!",
    choice3: "Constant Vigilance!",
    choice4: "Wotcher, Harry!",
    answer: "Constant Vigilance!",
  },
  {
    question:
      "What does the glittering mist in the Triwizard maze do when Harry steps into it?",
    choice1: "It put him to sleep",
    choice2: "It turned everything upside down",
    choice3: "It turned Harry invisible",
    choice4: "It made everything go dark",
    answer: "It turned everything upside down",
  },
  {
    question: "Where is the entrance to the secret tunnel that leads to Honeyduke's cellar?",
    choice1: "Behind the singing suit of armor",
    choice2: "Through the portrait with the ticklish pear",
    choice3: "Behind the seventh floor tapestry",
    choice4: "Through the one-eyed witch's hump",
    answer: "Through the one-eyed witch's hump",
  },
  {
    question: "What is Harry's favorite dessert?",
    choice1: "Pumpkin Pasties",
    choice2: "Treacle Tart",
    choice3: "Knickerbocker Glories",
    choice4: "Chocolate Frogs",
    answer: "Treacle Tart",
  },
  {
    question: "Which object is not one of Voldemort's horcruxes?",
    choice1: "Rowena Ravenclaw's diadem",
    choice2: "Salazar Slytherin's locket",
    choice3: "Marvolo Gaunt's ring",
    choice4: "Godric Gryffindor's sword",
    answer: "Godric Gryffindor's sword",
  },
  {
    question: "Where is the entrance to the Chamber of Secrets?",
    choice1: "Moaning Myrtle's bathroom",
    choice2: "Outside the entrance to the Slytherin common room",
    choice3: "Through the Whomping Willow tunnel",
    choice4: "The third floor corridor",
    answer: "Moaning Myrtle's bathroom",
  },
  {
    question: "Whose hairs did Hermoine think she was using for polyjuice potion in The Chamber of Secrets?",
    choice1: "Pansy Parkinson",
    choice2: "Daphne Greengrass",
    choice3: "Tracey Davis",
    choice4: "Millicent Bulstrode",
    answer: "Millicent Bulstrode",
  },
  {
    question: "What type of car did Arthur Weasley bewitch to fly?",
    choice1: "Vauxhall Viva",
    choice2: "Ford Anglia",
    choice3: "Austin Mini",
    choice4: "Ford Cortina",
    answer: "Ford Anglia",
  },
  {
    question: "Who does Fred Wealsey ask out to the Yule ball in The Goblet of Fire?",
    choice1: "Alicia Spinnet",
    choice2: "Katie Bell",
    choice3: "Angelina Johnson",
    choice4: "Marietta Edgecombe",
    answer: "Angelina Johnson",
  },
  {
    question: "Why is the Bloody Baron always wearing chains?",
    choice1: "Because he was buried in chains",
    choice2: "As punishment for his greedy life",
    choice3: "Because he died a prisoner",
    choice4: "As penance for killing Helena Ravenclaw",
    answer: "As penance for killing Helena Ravenclaw",
  },
  {
    question: "What name does Professor Binns incorrectly call Harry?",
    choice1: "Perkins",
    choice2: "Henry",
    choice3: "Harold",
    choice4: "Ponder",
    answer: "Perkins",
  },
];

function setTime() {
  // Sets interval in variable
  timeEl.textContent = secondsLeft
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    // playClick(); // Plays clock tick sound every second
    if (secondsLeft <= 0) {
      // Stops countdown of timer
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000); 
};

function startGame() {
  questionCounter = 0;
  score = 0;
  setTime();
  availableQuestions = [...questions];
  questionIndex = Math.floor(Math.random() * 4); // Chooses random number and sets current question index to that number
  getNewQuestion();
};

function getNewQuestion() { // Gets new question
  questionCounter++;
  currentQuestion = availableQuestions[questionIndex]; // Sets current question number generated in line above to index of array
  document.getElementById("question").innerHTML = currentQuestion.question; // This code updates the question with one chosen at random by the line above
  counterNumber.textContent = questionCounter;  
  for(let i=1; i<5; i++) { // This for loop updates the choices with those associated with the proper question from the array
    var choiceName = `choice${i}`;
    document.getElementById(choiceName).innerHTML = currentQuestion[choiceName];
  }
  if(questionCounter >= maxQuestions) { // Changed questionCounter >= maxQuestions to questionCounter = maxQuestions
    endGame();
  }
  questionIndex++;
};
  
// function playClick () { // Code to add click sounds to timer (placeholder for further development)
//   clickSound.play();
// };

// function playMusic () { // Code to play theme music (placeholder for further development)
//   musicTheme.play();
// };
localStorage
function endGame() { // On game over state this function should redirect to the high scores page (done), save the users score (not complete), compare it to the top 5 (not complete), and rewrite in top 5 if score is high enough (not complete)
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // Insert statement to validate that a name has been entered 
  validEntry = false;
  while(validEntry === false) {
    var champion = prompt("Congratulations Champion! Please enter your name:");
    if(champion === "") {
      validEntry = false;
    } else {
      validEntry = true;
    }
  };
  let score = {
    champion: champion,
    score: secondsLeft,
    };
    highScores.push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
  // if(champion != null) {
  //   localStorage.setItem('Champion', champion);
  // };
  // saveHighScore();
  location.href = "./highscores.html"; // Redirect code to high scores page
  //
};

// function saveHighScore() {
//   const score = {
//     champion: champion,
//     score: secondsLeft,
//     };
//     localStorage.setItem('score', JSON.stringify([score]));
// };

startGame();
