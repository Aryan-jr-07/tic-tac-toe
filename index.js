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