const height = 40;
const width = 30;
const snake = [4, 3, 2, 1, 0];
const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
const divs = [];

function createBoard() {
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        board.appendChild(div);
        divs.push(div);
    }

    color();
}

function color() {
    divs.forEach(div => div.classList.remove('active'));

    snake.forEach(num => {
        divs[num].classList.add('active');
    });
}

function move(dir) {
    let head = snake[0];

    if (dir === 'left') {
        head++;
    } else if (dir === 'right') {
        head--;
    } else if (dir === 'up') {
        head -= width;
    } else if (dir === 'down') {
        head += width;
    }

    snake.unshift(head);
    snake.pop();
    color();
}

createBoard();

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
    }
});