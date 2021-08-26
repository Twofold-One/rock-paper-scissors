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
            alert("something gone wrong!")
        }
    }
    //calling the function
    assignFunc();
    return randomVar;
}

//function which displays the result of the round
function displayResult (dispResult) {
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
                displayResult("Tie, play again");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Paper beats Rock");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Rock beats Scissors");
                break;
        }
    }

    //function if choose Paper
    function funcPaper() {
        switch (computerSelection) {
            case "rock":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Paper beats Rock");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "tie";
                displayResult("Tie, play again");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Scissors beats Paper");
                break;
        }
    }
    //function if choose Scissors
    function funcScissors() {
        switch (computerSelection) {
            case "rock":
                displayCompSelection(computerSelection);
                playRoundResult = "lose";
                displayResult("You lose this round! Rock beats Scissors");
                break;
            case "paper":
                displayCompSelection(computerSelection);
                playRoundResult = "win";
                displayResult("You win this round! Paper beats Rock");
                break;
            case "scissors":
                displayCompSelection(computerSelection);
                playRoundResult = "tie";
                displayResult("Tie, play again");
                break;
        }
    }

    if (playerSelection === "rock") {
        displayPlayerSelection(playerSelection);
        funcRock();
        //return playRoundResult;
    } else if (playerSelection === "paper") {
        displayPlayerSelection(playerSelection);
        funcPaper();
        //return playRoundResult;
    } else if (playerSelection === "scissors") {
        displayPlayerSelection(playerSelection);
        funcScissors();
        //return playRoundResult;
    } else {
        alert("Error, type a proper object!");
        playRoundResult = "error";
        //return playRoundResult;
    }
    return playRoundResult;
}

//funcion that deals with the scores
function score (roundResult) {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const roundNum = document.getElementById("round-num");
    let totalScore = Number(playerScore.innerText) + Number(computerScore.innerText);

    //function which clears scores
    function scoreClear () {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        roundNum.textContent = 0;
    }

    if (totalScore < 5) {

        //round num iterator
        //++roundNum;
        roundNum.textContent = Number(roundNum.textContent) + 1;
        
        if (roundResult === "win") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
        } else if (roundResult === "lose") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
        } else if (roundResult === "tie") {
            //alert("Tie, play additional round");
        }

    } else if (totalScore === 5) {

        if (Number(playerScore.innerText) > Number(computerScore.innerText)) {
            
            displayResult('Player WINS the game!');

        } else {
            displayResult('Computer WINS the game!');
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





/*
function btnPlayRound() {
    let roundResult = "deafault";

    //When you click on button func playRound returned with correct player chosen value
        const btns = document.querySelectorAll('button');
        btns.forEach((button) => {
        button.addEventListener('click', (e) => {

            if (e.target.id === `pl-rock`) {
                roundResult = playRound("rock", computerPlay());
            } else if (e.target.id === `pl-paper`) {
                roundResult = playRound("paper", computerPlay());
            } else if (e.target.id === `pl-scissors`) {
                roundResult = playRound("scissors", computerPlay());
            }



            /*
            switch(e.target.id) {
                case `pl-rock`:
                    roundResult = playRound("rock", computerPlay());
                    console.log(roundResult + " 123")
                break;
                case `pl-paper`:
                    roundResult = playRound("paper", computerPlay());
                break;
                case `pl-scissors`:
                    roundResult = playRound("scissors", computerPlay());
                break; 
            }
            
        });
    });
}
*/





/*
function btnPlayRound() {


    //When you click on button func playRound returned with correct player chosen value
        const btns = document.querySelectorAll('button');
        btns.forEach((button) => {
        button.addEventListener('click', (e) => {

            let playerScore = 0;
            let computerScore = 0;
            let roundNum = 0;
            let gameRoundResult;

            function score() {
                if (gameRoundResult === "win") {
                    ++playerScore;
                } else if (gameRoundResult === "lose") {
                    ++computerScore;
                } else if (gameRoundResult === "tie") {
                } 
            }    
            
            while (playerScore + computerScore < 5) {

            //round num iterator
            ++roundNum;

            if (e.target.id === `pl-rock`) {
                gameRoundResult = playRound("rock", computerPlay());
                score();
            } else if (e.target.id === `pl-paper`) {
                gameRoundResult = playRound("paper", computerPlay());
            } else if (e.target.id === `pl-scissors`) {
                gameRoundResult = playRound("scissors", computerPlay());
            }

            if (playerScore > computerScore) {
                console.log(`
                Player score is  ${playerScore}
                Computer score is ${computerScore}
                Total rounds played ${roundNum}
                Player WINS!
                `);
                //console.log("Player score is " + playerScore + ", computer score is " + computerScore + ". Player WINS!");
            } else {
                console.log(`
                Player score is  ${playerScore}
                Computer score is ${computerScore}
                Total rounds played ${roundNum}
                Computer WINS!
                `)};
            }
            /*
            switch(e.target.id) {
                case `pl-rock`:
                    roundResult = playRound("rock", computerPlay());
                    console.log(roundResult + " 123")
                break;
                case `pl-paper`:
                    roundResult = playRound("paper", computerPlay());
                break;
                case `pl-scissors`:
                    roundResult = playRound("scissors", computerPlay());
                break; 
            }
            
        });
    });
}
*/
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNum = 0;
    let gameRoundResult;

    //while (playerScore + computerScore < 5) {

        //round num iterator
        //++roundNum;





console.log(btnPlayRound() + " 111")

function score() {
    if (gameRoundResult === "win") {
        ++playerScore;
    } else if (gameRoundResult === "lose") {
        ++computerScore;
    } else if (gameRoundResult === "tie") {
    } 
}

score();

    if (playerScore > computerScore) {
        console.log(`
        Player score is  ${playerScore}
        Computer score is ${computerScore}
        Total rounds played ${roundNum}
        Player WINS!
        `);
        //console.log("Player score is " + playerScore + ", computer score is " + computerScore + ". Player WINS!");
    } else {
        console.log(`
        Player score is  ${playerScore}
        Computer score is ${computerScore}
        Total rounds played ${roundNum}
        Computer WINS!
        `);
        //console.log("Player score is " + playerScore + ", computer score is " + computerScore + ". Computer WINS!");
    }
}

game();

/*

//function of 5 score game
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let roundNum = 0;
    let roundResult;

    console.log(`
    Hello there!
    Pls type Rock, Paper or Scissors in the pop up
    window and try to beat the computer.
    Game is played for total score of 5.
    `)

    while (playerScore + computerScore < 5) {

        //round num iterator
        ++roundNum;

        //player selection func and variable
        let playerSelection = playerSelectionFunc ();

        function playerSelectionFunc () {
            let funcPlayerSelection = (prompt("Type Rock, Paper or Scissors"));

            if (funcPlayerSelection) {
                return funcPlayerSelection.toLowerCase();
            }
        }

        //let playerSelection = (prompt("Type Rock, Paper or Scissors")).toLowerCase();
        console.log("Round " + roundNum + " Player selection is: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("Round " + roundNum + " Computer selection is: " + computerSelection);
        console.log("Round " + roundNum + " result is: ");
        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === "win") {
            ++playerScore;
        } else if (roundResult === "lose") {
            ++computerScore;
        } else if (roundResult === "tie") {
            //console.log("Tie, play additional round");
        } else {
            console.log("Type a proper thing!");
        }



        console.log("Scores: " + "Player " + playerScore + ", " + "Computer " + computerScore);

        //console spacer
        console.log(`
        `)
    }


    if (playerScore > computerScore) {
        console.log(`
        Player score is  ${playerScore}
        Computer score is ${computerScore}
        Total rounds played ${roundNum}
        Player WINS!
        `);
        //console.log("Player score is " + playerScore + ", computer score is " + computerScore + ". Player WINS!");
    } else {
        console.log(`
        Player score is  ${playerScore}
        Computer score is ${computerScore}
        Total rounds played ${roundNum}
        Computer WINS!
        `);
        //console.log("Player score is " + playerScore + ", computer score is " + computerScore + ". Computer WINS!");
    }
}

game();


*/

//LEGACY
/*
let playerSelection = prompt("Type Rock, Paper or Scissors");
console.log("Player selection is: " + playerSelection);
let computerSelection = computerPlay();
console.log("Computer selection is: " + computerSelection);

console.log("Round result is: " + playRound(playerSelection, computerSelection));
*/

/*
let playerSelection = prompt("Type Rock, Paper or Scissors");
        console.log("Player selection is: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("Computer selection is: " + computerSelection);
        playRound(playerSelection, computerSelection);
        console.log("Round " + (playerScore + computerScore + 1) +  " result is: " + playRound(playerSelection, computerSelection));
        */

        //LEGACY huge construction without separate switch functions
/*
//playRound condition
if (playerSelection === "rock") {
    switch (computerSelection) {
        case "rock":
            playRoundResult = "Tie";
            console.log("Tie, play again");
            break;
        case "paper":
            playRoundResult = "Lose";
            console.log("You lose! Paper beats Rock");
            break;
        case "scissors":
            playRoundResult = "Win";
            console.log("You win! Rock beats Scissors");
            break;
    }
    return playRoundResult;
} else if (playerSelection === "paper") {
    switch (computerSelection) {
        case "rock":
            playRoundResult = "Win";
            console.log("You win! Paper beats Rock");
            break;
        case "paper":
            playRoundResult = "Tie";
            console.log("Tie, play again");
            break;
        case "scissors":
            playRoundResult = "Lose";
            console.log("You lose! Scissors beats Paper");
            break;
    }
    return playRoundResult;
} else if (playerSelection === "scissors") {
    switch (computerSelection) {
        case "Rock":
            playRoundResult = "Lose";
            console.log("You lose! Rock beats Scissors");
            break;
        case "Paper":
            playRoundResult = "Win";
            console.log("You win! Paper beats Rock");
            break;
        case "Scissors":
            playRoundResult = "Tie";
            console.log("Tie, play again");
            break;
    }
    return playRoundResult;
} else {
    return alert("Error, type a proper object!")
}
*/

//LEGACY
/*
console.log("Round " + ++roundNum +  " result is: ");
playRound(playerSelection, computerSelection);
*/
        //console.log("Round " + ++roundNum +  " result is: " + playRound(playerSelection, computerSelection));

/*
if (playRound(playerSelection, computerSelection) === "win") {
    playerScore++;
} else if (playRound(playerSelection, computerSelection) === "lose") {
    computerScore++;
} else {
    console.log("Tie, play additional round")
}
*/