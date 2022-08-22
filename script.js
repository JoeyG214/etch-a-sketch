const gridContainer = document.querySelector('.grid-container');
const range = document.querySelector('#range');
const gridSize = document.querySelector('.grid-size');


range.addEventListener('change', () => {
    changeGridDimensionsText(range.value)
    // console.log(range.value);
    //Function to change grid dimensions
})

function changeGridDimensionsText(dim) {
    gridSize.textContent = `${dim} x ${dim}`;
}