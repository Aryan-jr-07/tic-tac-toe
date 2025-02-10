const board = document.getElementById("board");
const status = document.getElementById("status");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            status.textContent = `Player ${currentPlayer} wins!`;
            board.removeEventListener("click", handleClick);
            return true;
        }
    }
    return false;
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add("taken");
        
        if (checkWinner()) return;
        
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function createBoard() {
    board.innerHTML = "";
    gameBoard.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index;
        board.appendChild(cell);
    });
    board.addEventListener("click", handleClick);
    status.textContent = `Player ${currentPlayer}'s turn`;
}

createBoard();

function checkWinner() {
  const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]            // Diagonals
  ];

  for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
          // Highlight winning cells
          cells[a].classList.add("winner");
          cells[b].classList.add("winner");
          cells[c].classList.add("winner");

          // Show confetti effect
          startConfetti();

          // Announce the winner
          setTimeout(() => {
              alert(`🎉 ${cells[a].innerText} Wins! 🎉`);
              resetGame();
          }, 1000);

          return true;
      }
  }
  return false;
}

function startConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti");
  document.body.appendChild(confettiContainer);

  setTimeout(() => {
      confettiContainer.remove();
  }, 3000);
}