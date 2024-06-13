let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function cellClicked(index) {
  if (!gameActive || board[index] !== '') return;
  
  board[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;
  
  if (checkWin() || checkDraw()) {
    gameActive = false;
    document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  for (let condition of winConditions) {
    let [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
