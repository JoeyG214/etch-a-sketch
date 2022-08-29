const gridContainer = document.querySelector('.grid-container');
const range = document.querySelector('#range');
const gridSize = document.querySelector('.grid-size');
const colorPicker = document.querySelector('#color-picker');
const colorButton = document.querySelector('.color-button');
const rainbowButton = document.querySelector('.rainbow-button');
const eraseButton = document.querySelector('.erase-button');
const clearButton = document.querySelector('.clear-button'); 

let currentButton = '';

let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}

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
    clearGrid();
    createGrid(range.value);
});

function clearGrid() {
    gridContainer.textContent = '';
}

function changeGridDimensionsText(dim) {
    gridSize.textContent = `${dim} x ${dim}`;
}

function createGrid(dim) {
    gridContainer.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    for(let i = 0; i < dim * dim; i++) {
        const gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.addEventListener('mouseover', (e) => {
            if (mouseDown)
            {
                if (currentButton === 'color') {
                    gridElement.style.backgroundColor = color();
                }
                if (currentButton === 'rainbow') {
                    gridElement.style.backgroundColor = rainbow();
                }
                if (currentButton === 'erase') {
                    gridElement.style.backgroundColor = erase();
                }
            }
        });
    }
}

function activeButton(selectedButton) {
    if(selectedButton === colorButton) {
        colorButton.classList.add('active');
        rainbowButton.classList.remove('active');
        eraseButton.classList.remove('active');
        currentButton = 'color';
    }
    else if (selectedButton === rainbowButton) {
        rainbowButton.classList.add('active');
        colorButton.classList.remove('active');
        eraseButton.classList.remove('active');
        currentButton = 'rainbow';
    }
    else if (selectedButton === eraseButton) {
        eraseButton.classList.add('active');
        colorButton.classList.remove('active');
        rainbowButton.classList.remove('active');
        currentButton = 'erase';
    }
}

function color() {
    return `${colorPicker.value}`;
}

function rainbow() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    return `rgb(${R}, ${G}, ${B})`;
}

function erase() {
    return '';
}

createGrid(range.value);
activeButton(colorButton);

