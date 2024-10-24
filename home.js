let body = document.querySelector("body");
let btn = document.querySelector("button")
let mainDiv = document.querySelector(".main");
let rock = document.createElement("button");
let paper = document.createElement("button");
let scissor = document.createElement("button");
let humanChoice,humanScore,computerChoice,computerScore;
humanScore = 0;
computerScore = 0;
rock.textContent = "rock";
paper.textContent = "paper";
scissor.textContent = "scissor";
function playButton() {
    // let newDiv = document.createElement("div");

    // mainDiv.appendChild(newDiv);
    mainDiv.appendChild(rock);
    mainDiv.appendChild(paper);
    mainDiv.appendChild(scissor);
    mainDiv.removeChild(btn);
}
btn.addEventListener("click", playButton)
function rockChoice(){
    console.log(computerScore);
    let counter = 0;
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    let result = document.createElement("div"g)
    body.appendChild(result);
    console.log(counter);
    if(counter==4){
        result.textContent = "GAME OVER"
    }
    else if(computerChoice=="rock"){
        counter++;
        result.textContent = "tie game";
        

    }
    else if(computerChoice=="paper"){
        computerScore++;
        counter++;
        result.textContent = `Computer Wins. Human Score = ${humanScore} || Computer Score = ${computerScore}`;
    }
    else if (computerChoice== "scissor"){
        humanScore++
        counter++;
        result.textContent= "you win";
        result.textContent = `Computer Choice= ${computerChoice} \n You Win. Human Score = ${humanScore} || Computer Score = ${computerScore}`;

    }
    
    
}
rock.addEventListener("click",rockChoice)
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
console.log(getComputerChoice())