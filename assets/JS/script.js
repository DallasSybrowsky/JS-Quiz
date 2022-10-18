const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
var timeRemaining = true;
var timeStart = false;
var timeEl = document.querySelector("#timer-number");
var timeBar = document.querySelector("#timer-counter");
var secondsLeft = 75;

// Event Listeners
var click1 = document.querySelector("#choice1");
var click2 = document.querySelector("#choice2");
var click3 = document.querySelector("#choice3");
var click4 = document.querySelector("#choice4");

// Validation that clicks work
click1.addEventListener("click", function() {
  console.log("choice1 was clicked.")
});
click2.addEventListener("click", function() {
  console.log("choice2 was clicked.")
});
click3.addEventListener("click", function() {
  console.log("choice3 was clicked.")
});
click4.addEventListener("click", function() {
  console.log("choice4 was clicked.")
});

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
    answer: 3,
  },
  {
    question: "What sweets do Fred & George Weasley develop to sell to students looking to skip classes?",
    choice1: "Peppermint Imps",
    choice2: "Skiving Snackboxes",
    choice3: "Acid Pops",
    choice4: "Fudge Flies",
    answer: 2,
  },
  {
    question: "What form does Hermione Granger's Patronus take?",
    choice1: "Swan",
    choice2: "Cat",
    choice3: "Canary",
    choice4: "Otter",
    answer: 4,
  },
  {
    question: "What did Hagrid do to Dudley when he first met Harry?",
    choice1: "Gave him a pig's tail",
    choice2: "Set his trousers on fire",
    choice3: "Gave him a ten foot tongue",
    choice4: "Told him off for bullying Harry",
    answer: 1,
  },
  {
    question: "What is Mad Eye Moody's catchphrase?",
    choice1: "Never put your wand in your back pocket!",
    choice2: "Don't trust anyone!",
    choice3: "Constant Vigilance!",
    choice4: "Wotcher, Harry!",
    answer: 3,
  },
  {
    question:
      "What does the glittering mist in the Triwizard maze do when Harry steps into it?",
    choice1: "It put him to sleep",
    choice2: "It turned everything upside down",
    choice3: "It turned Harry invisible",
    choice4: "It made everything go dark",
    answer: 2,
  },
  {
    question: "Where is the entrance to the secret tunnel that leads to Honeyduke's cellar?",
    choice1: "Behind the singing suit of armor",
    choice2: "Through the portrait with the ticklish pear",
    choice3: "Behind the seventh floor tapestry",
    choice4: "Through the one-eyed witch's hump",
    answer: 4,
  },
  {
    question: "What is Harry's favorite dessert?",
    choice1: "Pumpkin Pasties",
    choice2: "Treacle Tart",
    choice3: "Knickerbocker Glories",
    choice4: "Chocolate Frogs",
    answer: 2,
  },
  {
    question: "Which object is not one of Voldemort's horcruxes?",
    choice1: "Rowena Ravenclaw's diadem",
    choice2: "Salazar Slytherin's locket",
    choice3: "Marvolo Gaunt's ring",
    choice4: "Godric Gryffindor's sword",
    answer: 4,
  },
  {
    question: "Where is the entrance to the Chamber of Secrets?",
    choice1: "Moaning Myrtle's bathroom",
    choice2: "Outside the entrance to the Slytherin common room",
    choice3: "Through the Whomping Willow tunnel",
    choice4: "The third floor corridor",
    answer: 1,
  },
  {
    question: "Whose hairs did Hermoine think she was using for polyjuice potion in The Chamber of Secrets?",
    choice1: "Pansy Parkinson",
    choice2: "Daphne Greengrass",
    choice3: "Tracey Davis",
    choice4: "Millicent Bulstrode",
    answer: 4,
  },
  {
    question: "What type of car did Arthur Weasley bewitch to fly?",
    choice1: "Vauxhall Viva",
    choice2: "Ford Anglia",
    choice3: "Austin Mini",
    choice4: "Ford Cortina",
    answer: 2,
  },
  {
    question: "Who does Fred Wealsey ask out to the Yule ball in The Goblet of Fire?",
    choice1: "Alicia Spinnet",
    choice2: "Katie Bell",
    choice3: "Angelina Johnson",
    choice4: "Marietta Edgecombe",
    answer: 3,
  },
  {
    question: "Why is the Bloody Baron always wearing chains?",
    choice1: "Because he was buried in chains",
    choice2: "As punishment for his greedy life",
    choice3: "Because he died a prisoner",
    choice4: "As penance for killing Helena Ravenclaw",
    answer: 4,
  },
  {
    question: "What name does Professor Binns incorrectly call Harry?",
    choice1: "Perkins",
    choice2: "Henry",
    choice3: "Harold",
    choice4: "Ponder",
    answer: 1,
  },
];

// Constants
const correctAnswer = 10;
const maxQuestions = 10;

function setTime() {
  // Sets interval in variable
  timeEl.textContent = secondsLeft
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    // playClick(); // Plays clock tick sound every second
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // document.getElementById("#timer-counter").textContent = "GAME OVER!";
      // timeEl.textContent = "";
      timeBar.textContent = "GAME OVER"
      endGame();
// if secondsLeft is === to end game then the time should be your final score
      // if (secondsLeft === 0) {
      //   document.getElementById("#timer-counter").textContent = "GAME OVER!"
      // //  score.textContent = scoreText;
      // localStorage.setItem("", );
      // }
      // if myQuestions are wrong then secondsLeft 15-- should be taken from timer
      // if (myQuestions === ) {
      //  score.textContent = scoreText;
      // localStorage.setItem("", );
      // }
      // document.getElementById("timer").innerHTML = time;
    }
  }, // Insert code here to supplant the 1000ms time value for different difficulty levels
  1000
  ); 
};

function startGame() {
  questionCounter = 0;
  score = 0;
  setTime();
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
};

function getNewQuestion() {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Chooses random number and sets current question index to that number
  currentQuestion = availableQuestions[questionIndex]; // Sets current question number generated in line above to index of array
  
  document.getElementById("counter-number").textContent = questionCounter; // I want this line to update the HTML with the number of the current question
  document.getElementById("question").innerHTML = currentQuestion.question; // This code updates the question with one chosen at random by the line above
    
    for(let i=1; i<5; i++) { // This for loop updates the choices with those associated with the proper question from the array
      var choiceName = `choice${i}`;
      document.getElementById(choiceName).innerHTML = currentQuestion[choiceName];
    }
};
  
// function playClick () { // Code to add click sounds to timer (placeholder for further development)
//   clickSound.play();
// };

// function playMusic () { // Code to play theme music (placeholder for further development)
//   musicTheme.play();
// };

function endGame() { // On game over state this function should redirect to the high scores page (done), save the users score (not complete), compare it to the top 5 (not complete), and rewrite in top 5 if score is high enough (not complete)
  location.href = "./highscores.html"; // Redirect code to high scores page
  //
};

startGame();
