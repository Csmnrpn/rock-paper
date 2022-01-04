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
const startItemTop = document.querySelector('.top');
const storyContent = document.querySelector('.storyContent');

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
    if (winCounter > 7) {
        whoWon.classList.add('red');
    } else if (winCounter > 4) {
        whoWon.classList.add('orange');
    }

    whoWon.innerHTML = `Win counter ${winCounter}`;
}

function resetButton() {
    pPicked.innerHTML = '';
    cPicked.innerHTML = '';
    playerWinCounter = 0;
    computerWinCounter = 0;
    winner.innerHTML = '';
    playerWins.classList.remove('red', 'orange');
    computerWins.classList.remove('red', 'orange');
    winAmount(computerWins, computerWinCounter);
    winAmount(playerWins, playerWinCounter);
}

function checkForWin() {
    if (playerWinCounter === 10) {
        console.log('Player Won');
        startItemTop.innerHTML = "Humanity Wins";
        playGameButton.innerHTML = "Play Again?";
        startScreen.classList.remove('invisible');
        resetButton();
    } else if (computerWinCounter === 10) {
        console.log('Computer Won');
        startItemTop.innerHTML = "Game Over. The Robots have won."
        playGameButton.innerHTML = "Play Again?";
        startScreen.classList.remove('invisible');
        resetButton();
    }
}
//----------------------------------------------------------------------
// Game Logic

rock.addEventListener("click", function () {
    pPicked.innerHTML = `${rock.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === rock.innerHTML) {
        winner.innerHTML = 'Nobody Wins';
    } else if (pick === "Paper") {
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    } else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }
    checkForWin();
});

paper.addEventListener("click", function () {
    pPicked.innerHTML = `${paper.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === "Paper") {
        winner.innerHTML = 'Nobody Wins';
    } else if (pick === "Scissors") {
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    } else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }
    checkForWin();
});

scissors.addEventListener("click", function () {
    pPicked.innerHTML = `${scissors.innerHTML}`;
    let pick = computerChoice();
    cPicked.innerHTML = `${pick}`;
    if (pick === "Scissors") {
        winner.innerHTML = 'Nobody Wins';
    } else if (pick === "Rock") {
        winner.innerHTML = "Robot Wins";
        computerWinCounter += 1;
        winAmount(computerWins, computerWinCounter);
    } else {
        winner.innerHTML = "Player Wins";
        playerWinCounter += 1;
        winAmount(playerWins, playerWinCounter);
    }
    checkForWin();
});

playGameButton.addEventListener('click', function () {
    startScreen.classList.add('invisible');
    storyContent.classList.add('invisible');
})