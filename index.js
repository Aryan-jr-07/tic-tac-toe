// Function to generate a random color
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to update the background
function updateColor() {
  document.body.style.background = getRandomColor();
}

// Event Listener for Spacebar Press
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
      updateColor();
  }
});