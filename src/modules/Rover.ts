export default class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  
  movement(instructions: string): void {
    instructions.split('').forEach(letter => {
      switch(letter) {
        case 'L': 
          switch(this.direction) {
            case 'N':
              this.direction = 'W';
              break;
            case 'S':
              this.direction = 'E';
              break;
            case 'W':
              this.direction = 'S';
              break;
            case 'E':
              this.direction = 'N';
              break;
          }
          break;
        case 'R':
          switch(this.direction) {
            case 'N':
              this.direction = 'E';
              break;
            case 'S':
              this.direction = 'W';
              break;
            case 'W':
              this.direction = 'N';
              break;
            case 'E':
              this.direction = 'S';
              break;
          }
          break;
        case 'M':
          switch(this.direction) {
            case 'N':
              this.y += 1;
              break;
            case 'S':
              this.y -= 1;
              break;
            case 'W':
              this.x -= 1;
              break;
            case 'E':
              this.x += 1;
              break;
          }
          break;
          default:
            return `Sorry, there is no ${letter} as a rover moving instruction`
      }
    });
  }
}

const rover1 = new Rover(1, 2, 'N');
const rover2 = new Rover(3, 3, 'E');

rover1.movement('LMLMLMLMM');
rover2.movement('MMRMMRMRRM');

console.log(rover1)
console.log(rover2)