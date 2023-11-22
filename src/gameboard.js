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

  placeShip(length, x, y) {
    let ship = new Ship(length);
    this.getBoard()[x[0]][x[1]].ship = true;
    this.getBoard()[y[0]][y[1]].ship = true;
    if (x[0] === y[0]) {
      //All spaces in between will need to be taken
      let l = y - x > 0 ? y - x : x - y;
      for (let i = 0; i < l.length; i++) {
        this.getBoard()[x[0]][x[1 + i]].ship = true;
      }
    }
  } 
}