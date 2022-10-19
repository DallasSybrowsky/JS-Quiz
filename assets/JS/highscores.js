const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // I need to have code that will order the top 5 scores by score and display them to their HTML elements
console.log(highScores);

// Resetting High Scores
var resetScores = document.querySelector("#reset-button");

resetScores.addEventListener("click", function() {
    score = [];
});
