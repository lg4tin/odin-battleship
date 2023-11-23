/*eslint-disable*/
import { Ship } from "./ship.js"
import { GameBoard } from "./gameboard.js"
import { Player } from "./player.js"
const ship1 = new Ship(5);

console.log(ship1.length)
const game = new GameBoard;
game.placeShip(4, 5, 6, 'up');
game.placeShip(2, 1, 4, 'down')
const loois = new Player;
loois.attack(5,5,game)
loois.attack(5,6,game)
loois.attack(5,7,game)
loois.attack(5,8,game)

console.log(game.getBoard())
console.log(game.allShipsSunk())
console.log(game.ships)