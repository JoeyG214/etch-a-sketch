const gridContainer = document.querySelector('.grid-container');
const range = document.querySelector('#range');
const gridSize = document.querySelector('.grid-size');
const colorButton = document.querySelector('.color-button');
const rainbowButton = document.querySelector('.rainbow-button');
const eraseButton = document.querySelector('.erase-button');
const clearButton = document.querySelector('.clear-button');

range.addEventListener('change', () => {
    clearGrid();
    changeGridDimensionsText(range.value);
    createGrid(range.value);
});

colorButton.addEventListener('click', () => {
    activeButton(colorButton);
});

rainbowButton.addEventListener('click', () => {
    activeButton(rainbowButton);
});

eraseButton.addEventListener('click', () => {
    activeButton(eraseButton);
});

clearButton.addEventListener('click', () => {

});

function activeButton(selectedButton) {
    if(selectedButton === colorButton) {
        colorButton.classList.add('active');
        rainbowButton.classList.remove('active');
        eraseButton.classList.remove('active');
    }
    else if (selectedButton === rainbowButton) {
        rainbowButton.classList.add('active');
        colorButton.classList.remove('active');
        eraseButton.classList.remove('active');
    }
    else if (selectedButton === eraseButton) {
        eraseButton.classList.add('active');
        colorButton.classList.remove('active');
        rainbowButton.classList.remove('active');

    }
}

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

function clearGrid() {
    gridContainer.textContent = '';
}

createGrid(range.value);