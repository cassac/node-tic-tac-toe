var rl = require('./config').rl;

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
  init() {
    // return board to initial state
    this.board = Array(3).fill([null, null, null]);
  }
  print() {
    // print board to console
    console.log(this.board);
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
  whoseTurn() {
    return !this.turn ? 'X' : 'O';
  }
  promptPlayer() {
    // ask player for coordinates of move
    // return player response
  }
}

const play = () => {
  // create new board instance
  const board = new Board();
  // create new game instance
  const game = new Game();
  board.print();
  // while game is in play
  while (game.inPlay) {
    // ask current player to go
    // print board
    board.print();
    rl.question(`Player ${game.whoseTurn}'s Turn. Type x, y coordinates.`, (res) => {
      board.addPiece()
    })
    const [ x, y ] = ...game.promptPlayer();
    // insert piece
    board.insertPiece(x, y, whoseTurn)
    // detect win (and if tie game)
    board.detectGameOver()
    // go to next turn
    game.nextTurn();
  }
}
play()