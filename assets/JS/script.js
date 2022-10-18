const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
    question:
      "What sweets do Fred & George Weasley develop to sell to students looking to skip classes?",
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
    question:
      "Where is the entrance to the secret tunnel that leads to Honeyduke's cellar?",
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
    question:
      "Whose hairs did Hermoine think she was using for polyjuice potion in The Chamber of Secrets?",
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
    question:
      "Who does Fred Wealsey ask out to the Yule ball in The Goblet of Fire?",
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

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
}

function getNewQuestion() {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Chooses random number and sets current question index to that number
  currentQuestion = availableQuestions[questionIndex]; // Sets current question number generated in line above to index of array
  
  document.getElementById("counter-number").textContent = questionCounter; // I want this line to update the HTML with the number of the current question

  
    document.getElementById("question").innerHTML = currentQuestion.question; // This code updates the question with one chosen at random by the line above
    
    for(let i=1; i<5; i++) {
      var choiceName = `choice${i}`;
      document.getElementById(choiceName).innerHTML = currentQuestion[choiceName];
    }
  }
startGame();
