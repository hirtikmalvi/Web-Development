let userScorePara = document.querySelector("#userScore");
let computerScorePara = document.querySelector("#computerScore");
let userScore = 0;
let computerScore = 0;


let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let secondMessage = document.querySelector(".secondMessage");


const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    message.innerText = "D R A W";
    secondMessage.classList.add("hide");
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = "YOU WON";
        secondMessage.innerText = `Your ${userChoice} beats ${computerChoice}`;
        secondMessage.classList.remove("hide");
        

    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = "YOU LOST";
        secondMessage.innerText = `Computer's ${userChoice} beats your ${computerChoice}`;
        secondMessage.classList.remove("hide");
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const computerChoice = generateComputerChoice();

    if (userChoice === computerChoice) {//Game Draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        }
        else {//userChoice is scissor
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

