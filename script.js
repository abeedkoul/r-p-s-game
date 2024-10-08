console.log("hello");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let x = Math.random();
    let choice = "null";
    if (x >= 0 && x <= 0.3) {
        choice = "rock";
    }
    if (x > 0.3 && x <= 0.6) {
        choice = "paper";
    }
    if (x > 0.6 && x <= 1) {
        choice = "scissors";
    }
    return choice;
}
function getHumanChoice() {
    let choice;
    let keepGoing = true;
    while (keepGoing == true) {
        choice = prompt("enter your choice", "rock/paper/scissor");
        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissor") {
            console.log(`Human choice= ${choice.toLowerCase()}`);
            keepGoing = false;
            return choice;
        }
        else {
            alert("Error try again")
        }
    }
}




// console.log(`${typeof (humamChoice)}`);
// console.log(typeof (computerChoice));

function playGame() {
    let x = 0;
    function playRound(humanChoice, computerChoice) {

        if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
            console.log("You Lose! Better Luck Next Time");
            ++computerScore;
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock") {
            console.log("Tie Game No One Wins!");
        }
        else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
            console.log("Congratulations! You Won!!");
            ++humanScore;
        }
        if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
            console.log("You Lose! Better Luck Next Time");
            ++computerScore;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
            console.log("Congratulations! You Won!!");
            ++humanScore;
        }
        else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors") {
            console.log("Tie Game No One Wins!");

        }
        if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper") {
            console.log("Tie Game No One Wins!");

        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
            console.log("Congratulations! You Won!!");
            ++humanScore;
        }
        else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
            console.log("You Lose! Better Luck Next Time");
            ++computerScore;
        }
        console.log(`The Score is human = ${humanScore} and the computer = ${computerScore}`)
    }
    while (x < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`computer choice = ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        x++;
    }

}
playGame();
// playRound(humanChoice,computerChoice);

// getHumanChoice();