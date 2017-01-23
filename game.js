// Board class
class Board {
  // Constructor
  constructor() {
    // Game is in play
    this.inPlay = true;
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
  detectGameOver() {
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

// Main
  // create new game instance
  // create new board instance
  // while game is in play
    // print board
    // ask current player to go
    // insert piece
    // detect win (and if tie game)
    // go to next turn