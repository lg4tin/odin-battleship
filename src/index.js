/*eslint-disable*/
import { Ship } from "./ship.js"
import { GameBoard } from "./gameboard.js"
import { Player } from "./player.js"
import { AI } from "./ai.js"



const loois = new Player('louis');
const computer = new AI('computer');

const looisGameBoard = new GameBoard();
const computerGameBoard = new GameBoard();

computerGameBoard.placeShip(3, 1, 1, 'up');
computerGameBoard.placeShip(2, 5, 6, 'up');
computerGameBoard.placeShip(1, 8, 6, 'down');

loois.attack(1,2,computerGameBoard)

console.log(computerGameBoard.getBoard())
console.log(computerGameBoard.allShipsSunk())
console.log(computerGameBoard.ships)