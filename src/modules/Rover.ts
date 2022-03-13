export default class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  //implement functionality for movement
  movement(instructions: string) {
    return instructions.split('');
  }
}

const rover1 = new Rover(1, 2, 'N');

console.log(rover1.movement('LMLM'));