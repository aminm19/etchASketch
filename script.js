const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');
let numHighlights = 0;

function createSquares(n) {
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${780/n}px`;
        square.style.height = `${780/n}px`;
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseover', () => changeColor(square));
});
}
createSquares(16)

resetButton.addEventListener('click', () => {
    let numSquares = prompt('Please enter number of squares for side length');
    while (numSquares > 100) {
        numSquares = prompt('Please enter a number less than or equal to 100');
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    numHighlights = 0;
    createSquares(numSquares);
});


function changeColor(square) {
        square.style.backgroundColor = "lightslategray";
        square.style.opacity = (numHighlights < 10) ? (0.1 * (numHighlights)) : 1;
        numHighlights++;
    }