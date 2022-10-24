const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // I need to have code that will order the top 5 scores by score and display them to their HTML elements
console.log(highScores);

console.log(highScores.sort((a, b) => b.score - a.score));

// Resetting High Scores
var resetScores = document.querySelector("#reset-btn");

resetScores.addEventListener("click", function() {
    localStorage.clear();
});

for (let i = 0; i < 5; i++) {
    if(highScores[i]) {
        document.getElementById(`player${i}`).innerHTML = highScores[i].champion + ": ";
        document.getElementById(`score${i}`).innerHTML = highScores[i].score;
        

    }
};