const height = 40;
const width = 50;

function createBoard() {
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
    }
}

createBoard();