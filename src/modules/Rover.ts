export type Direction = 'N'|'S'|'W'|'E'
export type Instructions = 'L'|'R'|'M'

export class Rover {
  x: number;
  y: number;
  direction: Direction;
  instructions: Instructions;

  constructor(x: number, y: number, direction: Direction, instructions: Instructions) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.instructions = instructions;
  }   

  areRoverCoordinatesValid(x: number, y: number): boolean {
    let isValid = false
    if(x >= 0 && y >= 0) {
      this.x = x;
      this.y = y;
      isValid = true;
    } else {
      throw new Error('Coordinates should be bigger than or equal to 0');
    }
    return isValid;
  }
}