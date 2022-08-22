const gridContainer = document.querySelector('.grid-container');
const range = document.querySelector('#range');
const gridSize = document.querySelector('.grid-size');



range.addEventListener('change', () => {
    changeGridDimensionsText(range.value);
    changeGrid(range.value)
    // console.log(range.value);
});

function changeGridDimensionsText(dim) {
    gridSize.textContent = `${dim} x ${dim}`;
}

function createGrid(dim) {
    gridContainer.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    for(let i = 0; i < dim * dim; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        gridContainer.appendChild(gridElement);
    }
}

function changeGrid(dim) {
    gridContainer.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    for(let i = 0; i < dim * dim; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        gridContainer.appendChild(gridElement);
    }
}

createGrid(range.value);