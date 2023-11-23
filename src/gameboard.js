/*eslint-disable*/
import { Ship } from "./ship.js";

export class GameBoard {
  constructor() {
    this.missedAttacks = [];
    this.board = this.createBoard();
  }

  createBoard() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push([]);
      for (let j = 0; j < 10; j++) {
        array[i].push({ index: [j + 1, i + 1], ship: null, hit: null })
      }
    }
    return array;
  }

  getBoard() {
    return this.board;
  } 

  getPeice(x,y) {
    return this.board[x][y];
  }

  placeShip(length, x, y, dir) {
    let ship = new Ship(length);
    // this.getBoard()[x[0]][x[1]].ship = true;
    // this.getBoard()[y[0]][y[1]].ship = true;
    this.getBoard()[x][y].ship = true;
    if (dir === 'up') {
      //All spaces in between will need to be taken
      for (let i = x; i < length + x; i++) {
        this.getBoard()[x][i].ship = true;
      }
    } else {
      for (let i = y; i < length + y; i++) {
        this.getBoard()[i][y].ship = true;
      }
    }
  } 
}