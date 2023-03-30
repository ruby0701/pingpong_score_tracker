const player1 = document.querySelector("#player1plus");
const player2 = document.querySelector("#player2plus");
const reset = document.querySelector("#reset");

const select = document.querySelector("#selection");

const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");

let score1 = parseInt(player1score.innerText);
let score2 = parseInt(player2score.innerText);

let winnignScore = 5;
let isGameOver = false;

player1.addEventListener("click", () => {


    //making sure the game dosen't continue once a player hits the winning score
    if (!isGameOver) {
        //setting like this can prevent the score go over winning score
        if (score1 !== winnignScore) {
            score1 += 1;
            player1score.innerText = score1;

        }
    }
    if (score1 === winnignScore) {
        isGameOver = true;
    }


    //player1score.innerHTML = `<h1 color="green">${score}</h1>`;
});

player2.addEventListener("click", () => {


    if (!isGameOver) {
        //setting like this can prevent the score go over winning score
        if (score2 !== winnignScore) {
            score2 += 1;
            player2score.innerText = score2;

        }
    }
    if (score2 === winnignScore) {
        isGameOver = true;
    }

    //player1score.innerHTML = `<h1 color="green">${score}</h1>`;
});

reset.addEventListener("click", () => {
    player1score.innerText = "0";
    player2score.innerText = "0";
});