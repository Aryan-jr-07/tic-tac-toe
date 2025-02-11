function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateColor() {
  document.body.style.background = getRandomColor();
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
      updateColor();
  }
});