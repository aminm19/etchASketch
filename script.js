const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');


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
    square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'lightslategray';
    });
});
}
createSquares(16)

resetButton.addEventListener('click', () => {
    const numSquares = prompt('Please enter number of squares for side length')
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
    createSquares(numSquares);
});
