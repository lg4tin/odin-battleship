/*eslint-disable*/
import { Ship } from "./ship.js"
import { GameBoard } from "./gameboard.js"
const ship1 = new Ship(5);

console.log(ship1.length)
const game = new GameBoard;
game.placeShip(3, 1, 1, 'up');
game.placeShip(5, 5, 4, 'down')
game.receiveAttack(1,1);
console.log(game.getBoard())