const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning combinations
const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to check for a winner
function checkWinner() {
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            // Highlight winning cells
            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            statusText.textContent = `🎉 Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;
            return true;
        }
    }
    if (!gameBoard.includes("")) {
        statusText.textContent = "It's a Draw! 🤝";
        gameActive = false;
        return true;
    }
    return false;
}

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (!gameActive || gameBoard[index] !== "") return;

    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (checkWinner()) return;

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Function to restart the game
function resetGame() {
    gameBoard.fill("");
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = `Player X's Turn`;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("winner", "taken");
    });
}

// Attach event listeners
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);