var ComputerChoiceDisplay = document.getElementById('computer-choice');
var UserChoiceDisplay = document.getElementById('user-choice');
var ResultDisplay = document.getElementById('result');

var displayButton = document.querySelectorAll('.button');

var userChoice;
let computerChoice;
let display;

displayButton.forEach(button => button.addEventListener('click', function () {
    userChoice = button.innerHTML;
    UserChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    else if (randomNumber === 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissor"
    }
    ComputerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(userChoice === computerChoice){
        display = "It's a tie!"
    }
    else if(userChoice === "Rock" && computerChoice === "scissor" || userChoice === "paper" && computerChoice === "Rock" || userChoice === "scissor" && computerChoice === "paper"){
        display = "You win!"
    }
    else{
        display = "Computer wins!"
    }
    ResultDisplay.innerHTML = display;
}