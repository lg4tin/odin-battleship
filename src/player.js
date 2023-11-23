/*eslint-disable*/

export class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }

  attack(x, y, board) {
    if (this.turn === true) {
      board.receiveAttack(x, y);
      // this.turn = false;
    }
  }
}
