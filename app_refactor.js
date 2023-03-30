const p1 = {
    score: 0,
    button: document.querySelector("#player1plus"),
    display: document.querySelector("#plyaer1Score")
}

const p2 = {
    score: 0,
    button: document.querySelector("#player2plus"),
    display: document.querySelector("#plyaer2Score")
}


const reset = document.querySelector("#reset");

const select = document.querySelector("#selection");

let score1 = parseInt(player1score.innerText);
let score2 = parseInt(player2score.innerText);

const scoreTop = document.querySelector("#scoreTop");

let winningScore = parseInt(scoreTop.value);
let isGameOver = false;

function updateScore(player, opponet) {
    //making sure the game dosen't continue once a player hits the winning score
    if (!isGameOver) {
        //setting like this can prevent the score go over winning score
        if (player.score !== winningScore) {
            player.score += 1;
            player.display.innerText = player.score;
        }
    }
    if (player.score === winningScore) {
        player.display.classList.add("winner");
        opponet.display.classList.add("loser");
        isGameOver = true;
        player.button.disabled = true;
        opponet.button.disabled = true;
    }
}

p1.button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScore(p2, p1);
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
    isGameOver = flase;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = "0";
        p.display.classList.remove("winner", "loser");
        p.score = 0;
    }
}