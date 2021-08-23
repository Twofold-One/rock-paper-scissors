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
function playRound(playerSelection, computerSelection) {

    //round result variable
    let playRoundResult = "default";

    

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
    function funcRock() {
        switch (computerSelection) {
            case "rock":
                playRoundResult = "tie";
                console.log("Tie, play again");
                break;
            case "paper":
                playRoundResult = "lose";
                console.log("You lose! Paper beats Rock");
                break;
            case "scissors":
                playRoundResult = "win";
                console.log("You win! Rock beats Scissors");
                break;
        }
    }

    //function if choose Paper
    function funcPaper() {
        switch (computerSelection) {
            case "rock":
                playRoundResult = "win";
                console.log("You win! Paper beats Rock");
                break;
            case "paper":
                playRoundResult = "tie";
                console.log("Tie, play again");
                break;
            case "scissors":
                playRoundResult = "lose";
                console.log("You lose! Scissors beats Paper");
                break;
        }
    }
    //function if choose Scissors
    function funcScissors() {
        switch (computerSelection) {
            case "rock":
                playRoundResult = "lose";
                console.log("You lose! Rock beats Scissors");
                break;
            case "paper":
                playRoundResult = "win";
                console.log("You win! Paper beats Rock");
                break;
            case "scissors":
                playRoundResult = "tie";
                console.log("Tie, play again");
                break;
        }
    }


}

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