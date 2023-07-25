const gridContainer = document.querySelector(".grid-container");
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
  const innerContainer = document.createElement("div");
  innerContainer.className = "inner-container";
  gridContainer.appendChild(innerContainer);
}
