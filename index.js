const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function cellClicked() {
    const index = this.getAttribute("data-index");

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    this.textContent = currentPlayer;
    checkWinner();
}

// Check for a winner
function checkWinner() {
    let roundWon = false;
    let winningCells = [];

    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winningCells = [a, b, c]; 
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = ` Player ${currentPlayer} Wins! `;
        gameActive = false;

        // winning cells
        winningCells.forEach(index => {
            cells[index].style.background = "green"; // Green background for winner
            cells[index].style.color = "white"; // White text
        });

        return;
    }

    if (!board.includes("")) {
        statusText.textContent = "It's a Draw! ";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Restart the game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's Turn";
    
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.background = "white"; // Reset background
        cell.style.color = "black"; // Reset text color
    });
}

cells.forEach(cell => cell.addEventListener("click", cellClicked));
restartButton.addEventListener("click", restartGame);