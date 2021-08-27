// function returns randomly chosen by the computer Rock, Paper, Scissors 
function computerPlay() {

    let randomVar;

    // function generates random integer 1, 2 or 3
    function randomVarFunc() {
        randomVar = Math.floor(Math.random() * 3) + 1;
        return randomVar;
    }
    //calling the function
    randomVarFunc();
    // function assigns integer 1, 2, 3 to Rock, Paper, Scissors accordingly
    function assignFunc() {
        if (randomVar === 1) {
            return randomVar = "rock";
        } else if (randomVar === 2) {
            return randomVar = "paper";
        } else if (randomVar === 3) {
            return randomVar = "scissors";
        } else {
            alert("something gone wrong!");
        }
    }
    //calling the function
    assignFunc();
    return randomVar;
}

//function which displays the result of the round
function displayResult(dispResult) {
    const resultContainer = document.querySelector('#result-container');
    resultContainer.textContent = dispResult;
}

//function displays icon according to player selection
function displayPlayerSelection(playerSelection) {
    const containerPlSel = document.querySelector('#player-selection');

    if (playerSelection === "rock") {
        containerPlSel.innerHTML = '<i class="far fa-hand-rock"></i>';
    } else if (playerSelection === "paper") {
        containerPlSel.innerHTML = '<i class="far fa-hand-paper"></i>';
    } else if (playerSelection === "scissors") {
        containerPlSel.innerHTML = '<i class="far fa-hand-scissors"></i>';
    } else {} 
}

//function displays icon according to computer selection
function displayCompSelection(computerSelection) {
    const containerPlSel = document.querySelector('#computer-selection');

    if (computerSelection === "rock") {
        containerPlSel.innerHTML = '<i class="far fa-hand-rock"></i>';
    } else if (computerSelection === "paper") {
        containerPlSel.innerHTML = '<i class="far fa-hand-paper"></i>';
    } else if (computerSelection === "scissors") {
        containerPlSel.innerHTML = '<i class="far fa-hand-scissors"></i>';
    } else {} 
}

//function that plays single round
function playRound(playerSelection, computerSelection) {

    //round result variable
    let playRoundResult = "default";

    //function if choose Rock
    function funcRock() {
        switch (computerSelection) {
            case "rock":
                displayCompSelection(computerSelection);
                playRoundResult = "tie";
                displayResult("Tie, play again!");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Paper beats Rock!");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Rock beats Scissors!");
                break;
        }
    }

    //function if choose Paper
    function funcPaper() {
        switch (computerSelection) {
            case "rock":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Paper beats Rock!");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "tie";
                displayResult("Tie, play again!");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Scissors beats Paper!");
                break;
        }
    }
    //function if choose Scissors
    function funcScissors() {
        switch (computerSelection) {
            case "rock":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Rock beats Scissors!");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Paper beats Rock!");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "tie";
                displayResult("Tie, play again!");
                break;
        }
    }

    if (playerSelection === "rock") {
        displayPlayerSelection(playerSelection);
        funcRock();
    } else if (playerSelection === "paper") {
        displayPlayerSelection(playerSelection);
        funcPaper();
    } else if (playerSelection === "scissors") {
        displayPlayerSelection(playerSelection);
        funcScissors();
    } else {
        alert("Error, type a proper object!");
        playRoundResult = "error";
    }
    return playRoundResult;
}

//funcion that deals with the scores
function score(roundResult) {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const roundNum = document.getElementById("round-num");
    let totalScore = Number(playerScore.innerText) + Number(computerScore.innerText);
    
    //function checks if there is last round
    function lastRoundCheker() {
        if (totalScore + 1 === 5) {
            if (Number(playerScore.innerText) > Number(computerScore.innerText)) {
                alert('Player WINS the game!');
            } else {
                alert('Computer WINS the game!');
            }
            scoreClear();
        }
    }

    //function which clears scores
    function scoreClear() {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        roundNum.textContent = 0;
        displayResult("Want to play again?");
    }

    if (totalScore < 5) {

        //round num iterator
        //++roundNum;
        roundNum.textContent = Number(roundNum.textContent) + 1;
        
        if (roundResult === "win") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            lastRoundCheker();  
        } else if (roundResult === "lose") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            lastRoundCheker();  
        } else if (roundResult === "tie") {
            //alert("Tie, play additional round");
        }
    }
}

//function activated if rock have been chosen
function playRoundRock () {
    let roundResult = playRound("rock", computerPlay());
    score(roundResult);
}

//function activated if paper have been chosen
function playRoundPaper () {
    let roundResult = playRound("paper", computerPlay());
    score(roundResult);
}

//function activated if scissors have been chosen
function playRoundScissors () {
    let roundResult = playRound("scissors", computerPlay());
    score(roundResult);
}

function btnClick () {
    //When you click on button func playRound returned with correct player chosen value
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        button.addEventListener('click', (e) => {
            //console.log(e);
            //console.log(e.target.id);

            switch(e.target.id) {
                case `pl-rock`:
                    playRoundRock();
                break;
                case `pl-paper`:
                    playRoundPaper();
                break;
                case `pl-scissors`:
                    playRoundScissors();
                break; 
            }

        });
    });
}

btnClick();