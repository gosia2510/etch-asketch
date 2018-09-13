const container = document.querySelector('.grid-container');

generateCells(16);

const cells = document.querySelectorAll('.cell');

function generateCells(gridSize) {
  for(let i = 0; i < Math.pow(gridSize, 2); i++){
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    container.appendChild(cell);
  }
}
