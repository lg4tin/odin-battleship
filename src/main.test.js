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
  hi.placeShip(3, [1,1], [1,3])
  expect(hi.getBoard()[1][1].ship).toEqual(true);
  expect(hi.getBoard()[1][2].ship).toEqual(true);
  expect(hi.getBoard()[1][3].ship).toEqual(true);
})