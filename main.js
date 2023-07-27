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

function setGridSize(GRID_SIZE) {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < GRID_SIZE; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.className = "row-container";

    for (let j = 0; j < GRID_SIZE; j++) {
      const columnContainer = document.createElement("div");
      columnContainer.className = "column-container";
      columnContainer.style.height = `${GRID_HEIGHT / GRID_SIZE}px`;
      columnContainer.style.width = `${GRID_WIDTH / GRID_SIZE}px`;
      rowContainer.appendChild(columnContainer);
    }

    gridContainer.appendChild(rowContainer);
  }

  const columns = Array.from(document.querySelectorAll(".column-container"));
  columns.forEach((item) => {
    item.addEventListener("mouseover", changeBG);
  });
}

const generateRandom = function () {
  return Math.random() * 256;
};

const changeBG = function (event) {
  event.target.style.backgroundColor = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`;
};

setGridSize(25);
