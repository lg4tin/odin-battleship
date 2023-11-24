/*eslint-disable*/
import { Ship } from "./ship.js";

export class GameBoard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
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
    if (x < 0 || x > 9 || y < 0 || y > 9) return;
    let ship = new Ship(length);
    this.ships.push(ship);
    // this.getBoard()[x][y].ship = true;
    if (dir == 'up') {
      //All spaces in between will need to be taken
      for (let i = x; i < length + x; i++) {
        this.getBoard()[x][i + 1].ship = ship;
      }
    } else {
      for (let i = x; i < length + x; i++) {
        this.getBoard()[i][y].ship = ship;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.getBoard()[x][y].ship) {
      this.getBoard()[x][y].ship.hit();
      this.getBoard()[x][y].hit = true;
    } else {
      this.missedAttacks.push([x,y]);
      this.getBoard()[x][y].hit = 'miss';
    }
  }

  allShipsSunk() {
    let allSunk = true;
    for (let element of this.ships) {
      if (!element.isSunk()) {
        allSunk = false;
      }
    }
    return allSunk;
  }
}