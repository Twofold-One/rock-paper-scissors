
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
            return randomVar = "Rock";
        } else if (randomVar === 2) {
            return randomVar = "Paper"; 
        } else if (randomVar === 3) {
            return randomVar = "Scissors";
        } else {
            alert("something gone wrong!")
        }
    }
    //calling the function
    assignFunc();    
    return randomVar;       

}

console.log(computerPlay());