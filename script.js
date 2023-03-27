// Set up canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define character properties
const characterWidth = 20;
const characterHeight = 20;
let characterX = 0;
const characterY = canvas.height - characterHeight;

// Draw character
function drawCharacter() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(characterX, characterY, characterWidth, characterHeight);
}

// Update character position
function updateCharacter() {
  characterX += 5;
  if (characterX > canvas.width) {
    characterX = -characterWidth;
  }
}

// Game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update character
  updateCharacter();

  // Draw character
  drawCharacter();

  // Request next frame
  requestAnimationFrame(gameLoop);
}

// Start game loop
gameLoop();
