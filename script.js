// implement reset button
// implement start screen 
// implement Game Over / Game Won
// implement Play Again

//-------------------------------------------------------------------
// DOM Selectors

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerPick = document.querySelector('.playerPick');
const computerPick = document.querySelector('.computerPick');
const winner = document.querySelector('.winner');
const cPicked = document.querySelector('.cPicked');
const pPicked = document.querySelector('.pPicked');
const computerWins = document.querySelector('.computerWins');
const playerWins = document.querySelector('.playerWins');
const reset = document.querySelector('.reset');
const playGameButton = document.querySelector('.playGameButton');
const startScreen = document.querySelector('.startScreen');

let playerWinCounter = 0;
let computerWinCounter = 0;

//---------------------------------------------------------------------
// Functions


function computerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function winAmount(whoWon, winCounter) {
    whoWon.innerHTML = `Win counter ${winCounter}`;
}

function resetButton(){
    pPicked.innerHTML = '';
    cPicked.innerHTML = '';
    playerWinCounter = 0;
    computerWinCounter = 0;
    winner.innerHTML = '';
    winAmount(computerWins, computerWinCounter);
    winAmount(playerWins, playerWinCounter);
}

//----------------------------------------------------------------------
// Game Logic

rock.addEventListener("click", function(){
    pPicked.innerHTML = `${rock.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === rock.innerHTML) {
        winner.innerHTML = 'Nobody Wins';
    }
    else if (pick === "Paper"){
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    }
    else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }

});

paper.addEventListener("click", function(){
    pPicked.innerHTML = `${paper.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === "Paper") {
        winner.innerHTML = 'Nobody Wins';
    }
    else if (pick === "Rock"){
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    }
    else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }
});

scissors.addEventListener("click", function(){
    pPicked.innerHTML = `${scissors.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === "Scissors") {
        winner.innerHTML = 'Nobody Wins';
    }
    else if (pick === "Rock"){
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    }
    else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }
});

playGameButton.addEventListener('click', function(){
    startScreen.classList.add('invisible');
})