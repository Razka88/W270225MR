const height = 30;
const width = 30;
const snake = [7, 6, 5, 4, 3, 2, 1, 0];
const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
const divs = [];
let direction = 'left';
let interval;
let baitIndex;

function createBoard() {
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
        divs.push(div);
    }

    color();
    setBait();
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
        if (direction == 'right') {
            return;
        }

        head++;

        if (head % width === 0) {
            gameOver();
            return;
        }
    } else if (dir === 'right') {
        if (direction == 'left') {
            return;
        }

        head--;

        if ((head + 1) % width === 0) {
            gameOver();
            return;
        }
    } else if (dir === 'up') {
        if (direction == 'down') {
            return;
        }

        head -= width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'down') {
        if (direction == 'up') {
            return;
        }

        head += width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    }

    if (snake.includes(head)) {
        gameOver();
        return;
    }

    direction = dir;
    snake.unshift(head);

    if (head == baitIndex) {
        setBait();
    } else {
        snake.pop();
    }

    color();
    autoMove();
}

function autoMove() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}

function gameOver() {
    clearInterval(interval);
    alert("איזה באסה...");
}

function setBait() {
    divs[baitIndex]?.classList.remove('bait');
    baitIndex = Math.floor(Math.random() * divs.length);

    if (snake.includes(baitIndex)) {
        setBait();
    } else {
        divs[baitIndex].classList.add('bait');
    }
}

createBoard();

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'Escape': clearInterval(interval); break;
    }
});