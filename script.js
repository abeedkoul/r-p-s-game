console.log("hello");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let humanScore = 0;
let computerScore = 0;
let humanChoice;    //Creating two variable globally to store the values
let computerChoice;  //Creating two variable globally to store the values 
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
        choice = "scissor";
    }
    return choice;
}

function eventType(e) {
    console.log(e.type);
}

function fullGame() {

    rock.addEventListener("click", () => { humanChoice == "rock" });
    computerChoice = getComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice);
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Better Luck Next Time");
        ++computerScore;
    }
}


fullGame();



// scissor.addEventListener("click", () => {
//     console.log("rock");
//     return "scissors"
// });



function getHumanChoice() {

    // const rock = document.querySelector("#rock");
    // const paper = document.querySelector("#paper");
    // const scissor = document.querySelector("#scissor");
    // rock.addEventListener("click",()=>{ return "rock"});
    // paper.addEventListener("click",()=>{return "paper"});
    // scissor.addEventListener("click",()=>{return "scissors"});

    // while (keepGoing == true) {
    //     choice = prompt("enter your choice", "rock/paper/scissor");
    //     if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissor") {
    //         console.log(`Human choice= ${choice.toLowerCase()}`);
    //         keepGoing = false;
    //         return choice;
    //     }
    //     else {
    //         alert("Error try again")
    //     }
    // }
}






// function playGame() {
//     let x = 0;
//     function playRound(humanChoice, computerChoice) {
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();

//         if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
//             console.log("You Lose! Better Luck Next Time");
//             ++computerScore;
//         }
//         else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock") {
//             console.log("Tie Game No One Wins!");
//         }
//         else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissor") {
//             console.log("Congratulations! You Won!!");
//             ++humanScore;
//         }
//         if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "paper") {
//             console.log("Congratulations! You Won!!");
//             ++humanScore;
//         }
//         else if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "rock") {
//             console.log("You Lose! Better Luck Next Time");
//             ++computerScore;
//         }
//         else if (humanChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "scissor") {
//             console.log("Tie Game No One Wins!");

//         }
//         if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper") {
//             console.log("Tie Game No One Wins!");

//         }
//         else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
//             console.log("Congratulations! You Won!!");
//             ++humanScore;
//         }
//         else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissor") {
//             console.log("You Lose! Better Luck Next Time");
//             ++computerScore;
//         }
//         console.log(`The Score is human = ${humanScore} and the computer = ${computerScore}`)
//     }
//     playRound(humanChoice, computerChoice);
//     // while (x < 5) {
//     // let computerChoice = getComputerChoice();
//     // let humanChoice = getHumanChoice();
//     //     console.log(`computer choice = ${computerChoice}`);
//     //     playRound(humanChoice, computerChoice);
//     //     x++;
//     // }
//     // if (humanScore>computerScore){
//     //     console.log(`You win with a score of ${humanScore}`);
//     // }
//     // else if (humanScore==computerScore){
//     //     console.log("It is a tie")
//     // }
//     // else{
//     //     console.log(`You lose as the computer scored ${computerScore} and you scored ${humanScore}`);
//     // }

// }

// playGame();
