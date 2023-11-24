/*eslint-disable*/

export class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }

  attack(x, y, enemyBoard) {
    if (this.turn === true) {
      enemyBoard.receiveAttack(x, y);
      this.turn = false;
    }
  }
}
