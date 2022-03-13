export default class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  
  /** 
   * Implements the functionality to move the Rover 
   * @param instructions - given a string of letters to move the Rover; R, L, M  
  */
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