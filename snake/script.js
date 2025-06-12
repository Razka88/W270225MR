const height = 40;
const width = 30;
const snake = [4, 3, 2, 1, 0];

function createBoard() {
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        board.appendChild(div);
    }
}

function color() {
    
}

createBoard();