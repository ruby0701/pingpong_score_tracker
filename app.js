const player1 = document.querySelector("#player1plus");
const player2 = document.querySelector("#player2plus");
const reset = document.querySelector("#reset");

const select = document.querySelector("#selection");

const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");

let score1 = parseInt(player1score.innerText);
let score2 = parseInt(player2score.innerText);

const scoreTop = document.querySelector("#scoreTop");

let winningScore = parseInt(scoreTop.value);
let isGameOver = false;

player1.addEventListener("click", () => {

    //making sure the game dosen't continue once a player hits the winning score
    if (!isGameOver) {
        //setting like this can prevent the score go over winning score
        if (score1 !== winningScore) {
            score1 += 1;
            player1score.innerText = score1;

        }
    }
    if (score1 === winningScore) {
        player1score.classList.add("winner");
        player2score.classList.add("loser");
        isGameOver = true;
    }
});

player2.addEventListener("click", () => {

    if (!isGameOver) {
        //setting like this can prevent the score go over winning score
        if (score2 !== winningScore) {
            score2 += 1;
            player2score.innerText = score2;

        }
    }
    if (score2 === winningScore) {
        player1score.classList.add("loser");
        player2score.classList.add("winner");
        isGameOver = true;
    }
});

reset.addEventListener("click", resets);

scoreTop.addEventListener("change", () => {
    //get top score and store in winnigScore
    winningScore = parseInt(scoreTop.value);

    //needs to reset the scores so the game restart
    //you don't change the top score mid-game
    resets();
});

function resets() {
    player1score.innerText = "0";
    player2score.innerText = "0";
    player1score.classList.remove("winner", "loser");
    player2score.classList.remove("winner", "loser");
    score1 = 0;
    score2 = 0;
    isGameOver = false;
}