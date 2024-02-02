const headerContent = document.getElementById('headerContent');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const otherStats = document.querySelectorAll('#otherStats');
const userCounter = document.getElementById('userCounter');
const computerCounter = document.getElementById('computerCounter');

let computerMove = '';
let result = '';

let userWins = 0;
let userLosses = 0;
let userTies = 0;

let computerWins = 0;
let computerLosses = 0;
let computerTies = 0;

function playGame(userMove) {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    
    if (userMove === computerMove) {
        result = 'Tie';
        userTies++
        computerTies++
    } else if (
        (userMove === 'Rock' && computerMove === 'Scissors') ||
        (userMove === 'Scissors' && computerMove === 'Paper') ||
        (userMove === 'Paper' && computerMove === 'Rock')
    ) {
        result = 'You win';
        userWins++;
        computerLosses++
    } else {
        result = 'You lose';
        userLosses++;
        computerWins++
    }

    let resultColor;
    switch (result) {
        case 'Tie':
            resultColor = 'yellow';
            break;
        case 'You win':
            resultColor = 'green';
            break;
        case 'You lose':
            resultColor = 'red';
            break;
    }
    headerContent.innerHTML = `
        <span>You picked: </span> <span style="color: lightblue; font-weight: bold;">${userMove}</span> 
        <span>Computer picked:</span> <span style="color: teal; font-weight: bold;">${computerMove}</span>
        <p class="match_result">Match result: <span style="color: ${resultColor};">${result}.</span></p>
        `
    otherStats.forEach((element) => {
        element.innerHTML = `
                <span style= "color: green;">W</span>
                <span style= "color: red;">L</span>
                <span style= "color: yellow;">T</span>
            `
    })
    userCounter.innerHTML = `
        <span style= "color: green;">${userWins}</span>
        <span style= "color: red;">${userLosses}</span> 
        <span style= "color: yellow;">${userTies}</span>  
    `

    computerCounter.innerHTML = `
        <span style= "color: green;">${computerWins}</span>
        <span style= "color: red;">${computerLosses}</span>
        <span style= "color: yellow;">${computerTies}</span>
    `
}

rockBtn.addEventListener('click', () => {
    playGame('Rock');
})

paperBtn.addEventListener('click', () => {
    playGame('Paper');
})

scissorsBtn.addEventListener('click', () => {
    playGame('Scissors');
})

