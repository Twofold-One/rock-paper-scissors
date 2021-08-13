
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

//function that plays single round
function playRound (playerSelection, computerSelection) {
    
    //round result variable
    let playRoundResult = "default";
    
    //huge construction without separate switch functions
    
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

    if (playerSelection === "rock") {
        funcRock();
        return playRoundResult;         
    } else if (playerSelection === "paper") {
        funcPaper();
        return playRoundResult;
    } else if (playerSelection === "scissors") {
        funcScissors();
        return playRoundResult;
    } else {
        alert("Error, type a proper object!");
        playRoundResult = "error";
        return playRoundResult;
    }

    //function if choose Rock
    function funcRock () {
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
    }

    //function if choose Paper
    function funcPaper () {
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
    }
    //function if choose Scissors
    function funcScissors () {
        switch (computerSelection) {
            case "rock":
                playRoundResult = "Lose";
                console.log("You lose! Rock beats Scissors");
                break;
            case "paper":
                playRoundResult = "Win";
                console.log("You win! Paper beats Rock");
                break;
            case "scissors":
                playRoundResult = "Tie";
                console.log("Tie, play again");
                break;
        }
    }
   
    
}

let playerSelection = prompt("Type Rock, Paper or Scissors");
console.log("Player selection is: " + playerSelection);
let computerSelection = computerPlay();
console.log("Computer selection is: " + computerSelection);

console.log("Round result is: " + playRound(playerSelection, computerSelection));