const board = document.getElementById('board');
let currentPlayer = 'X';
const cells = Array(9).fill(null);

function checkWinner() {
  if ((cells[0] && cells[0] === cells[1] && cells[1] === cells[2]) ||
      (cells[3] && cells[3] === cells[4] && cells[4] === cells[5]) ||
      (cells[6] && cells[6] === cells[7] && cells[7] === cells[8]) ||
      (cells[0] && cells[0] === cells[3] && cells[3] === cells[6]) ||
      (cells[1] && cells[1] === cells[4] && cells[4] === cells[7]) ||
      (cells[2] && cells[2] === cells[5] && cells[5] === cells[8]) ||
      (cells[0] && cells[0] === cells[4] && cells[4] === cells[8]) ||
      (cells[2] && cells[2] === cells[4] && cells[4] === cells[6])) {
    return true;
  }
  return false;
}

function handleClick(index) {
  if (cells[index] || checkWinner()) {
    return;
  }
  cells[index] = currentPlayer;
  render();
  if (checkWinner()) {
    alert(currentPlayer + ' wins!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i] = null;
  }
  currentPlayer = 'X';
  render();
}

function render() {
  board.innerHTML = '';
  cells.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = value;
    cell.onclick = () => handleClick(index);
    board.appendChild(cell);
  });
}

resetGame();
