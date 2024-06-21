let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGameButton");
let turnOfO = true;
let newGameBtn = document.querySelector("#newGameButton");
let messageContainer = document.querySelector(".messageContainer");
let message = document.querySelector("#message");
let isDraw = true;
let totalNoOfMoves = 0;

const winninPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnOfO) {
            box.innerHTML = "O";
            box.style.color = "green";
            turnOfO = false;
        }
        else {
            box.innerHTML = "X";
            box.style.color = "red";
            turnOfO = true;
        }
        box.disabled = true;
        totalNoOfMoves++;
        checkWinner();
        if (isDraw === true && totalNoOfMoves === 9) {
            showDraw();
        }
    });
});

const disableTheBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableTheBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    enableTheBoxes();
    messageContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
    isDraw = true;
    totalNoOfMoves = 0;
}

const showWinner = (winner) => {
    message.innerText = `Congratulations ${winner}, You are the winner!!!`;
    messageContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    disableTheBoxes();
}

const showDraw = () => {
    message.innerText = "D R A W";
    messageContainer.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    disableTheBoxes();
}

const checkWinner = () => {
    for (let pattern of winninPatterns) {
        const position1Value = boxes[pattern[0]].innerText;
        const position2Value = boxes[pattern[1]].innerText;
        const position3Value = boxes[pattern[2]].innerText;

        if (position1Value != "" && position2Value != "" && position3Value != "") {
            if (position1Value === position2Value && position2Value === position3Value) {
                isDraw = false;
                showWinner(position1Value);
                return;
            }
        }
    }
}


resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);