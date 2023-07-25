const gridContainer = document.querySelector(".grid-container");

const GRID_SIZE = 16;
const GRID_WIDTH = getComputedStyle(document.body).getPropertyValue(
  "--grid-width"
);

const GRID_HEIGHT = getComputedStyle(document.body).getPropertyValue(
  "--grid-height"
);

for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const innerContainer = document.createElement("div");
    innerContainer.className = "inner-container";
    innerContainer.style.width = `${GRID_WIDTH / GRID_SIZE}px`;
    innerContainer.style.height = `${GRID_HEIGHT / GRID_SIZE}px`;
    gridContainer.appendChild(innerContainer);
  }
}
