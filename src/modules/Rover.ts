export default class Rover {
  x: number;
  y: number;
  direction: string;
  instructions: string;

  constructor(x: number, y: number, direction: string, instructions: string) {
    if(x >= 0 && y >= 0) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('Coordinates should be bigger than or equal to 0');
    }
    if(direction === 'N' || direction === 'S' || direction === 'W' || direction === 'E') {
      this.direction = direction;
    } else {
      throw new Error('Direction should be 1 capital letter of N, S, W or E');
    } 

    this.instructions = instructions;
  }   
}