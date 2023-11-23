/*eslint-disable*/
import { Ship } from "./ship.js";
import { GameBoard } from "./gameboard.js";

test('ship is hit', () => {
  let a = new Ship(5);
  expect(a.length).toEqual(5);
});

test('ship is hit', () => {
  let a = new Ship(3);
  a.hit()
  expect(a.hits).toEqual(1);
});

test('ship is hit', () => {
  let a = new Ship(2);
  a.hit()
  a.hit()
  expect(a.isSunk()).toBe(true);
});

/////////

test('gameBoard', () => {
  const hi = new GameBoard;
  expect(hi.board[0][0].ship).toEqual(null);
});

test('gameBoard', () => {
  const hi = new GameBoard;
  hi.placeShip(3, 1, 1, 'up')
  expect(hi.getBoard()[1][1].ship).not.toBe(null);
  expect(hi.getBoard()[1][2].ship).not.toBe(null);
  expect(hi.getBoard()[1][3].ship).not.toBe(null);
})

test('gameBoard', () => {
  const hi = new GameBoard;
  hi.placeShip(4, 1, 1, 'down')
  expect(hi.getBoard()[1][1].ship).not.toBe(null);
  expect(hi.getBoard()[2][1].ship).not.toBe(null);
  expect(hi.getBoard()[3][1].ship).not.toBe(null);
  expect(hi.getBoard()[4][1].ship).not.toBe(null);
})

test('gameBoard', () => {
  const hi = new GameBoard;
  hi.placeShip(4, 10, 1, 'down')
  expect(hi.getBoard()[1][1].ship).toEqual(null);
  expect(hi.getBoard()[2][1].ship).toEqual(null);
  expect(hi.getBoard()[3][1].ship).toEqual(null);
  expect(hi.getBoard()[4][1].ship).toEqual(null);
})