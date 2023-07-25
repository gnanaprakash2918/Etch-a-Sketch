const gridContainer = document.querySelector(".grid-container");
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const innerContainer = document.createElement("div");
    innerContainer.className = "inner-container";
    innerContainer.style.width = `${560 / GRID_SIZE}px`;
    innerContainer.style.height = `${560 / GRID_SIZE}px`;
    gridContainer.appendChild(innerContainer);
  }
}
