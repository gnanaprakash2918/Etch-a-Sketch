const gridContainer = document.getElementsByClassName("grid-container");
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
  const innerContainer = document.createElement("div");
  gridContainer.appendChild(innerContainer);
}
