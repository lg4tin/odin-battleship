/*eslint-disable*/
import { Ship } from "./ship.js";

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

