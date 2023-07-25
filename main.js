const gridContainer = document.querySelector(".grid-container");

const GRID_SIZE = 16;
const GRID_WIDTH = Number(
  getComputedStyle(document.body)
    .getPropertyValue("--grid-width")
    .replace("px", "")
);
const GRID_HEIGHT = Number(
  getComputedStyle(document.body)
    .getPropertyValue("--grid-height")
    .replace("px", "")
);

console.log(GRID_HEIGHT);

for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const innerContainer = document.createElement("div");
    innerContainer.className = "inner-container";
    innerContainer.style.height = `${GRID_HEIGHT / GRID_SIZE}px`;
    innerContainer.style.width = `${GRID_WIDTH / GRID_SIZE}px`;
    gridContainer.appendChild(innerContainer);
  }
}
