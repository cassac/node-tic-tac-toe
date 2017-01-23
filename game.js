// Board class
class Board {
  // Constructor
  constructor() {
    // piece count
    this.count = 0,
    // array of board
    this.board = Array(3).fill([null, null, null]);
  }
  // Methods
  addPiece(x, y, player) {
    // check if location already occupied
    // add piece via coordinates, X or O
    this.board[x][y] = player;
  }
  // Win detection
  detectWin() {
    // scan board for win
      // announce winner if found
      // end game
    // if total pieces = 9
      // end game
  }
  // Reset board
  initBoard() {
    // return board to initial state
    this.board = Array(3).fill([null, null, null]);
  }
  printBoard() {
    // print board to console
  }
}

// Game
class Game {
  // Constructor
  constructor() {
    // current turn
    this.turn = Math.round(Math.random());
  }
  // Methods
  // Whose turn
  nextTurn() {
    return this.turn ? 'X' : 'O'; 
  }
  // Who won
  currentTurn() {
    return !this.turn ? 'X' : 'O';
  }
}