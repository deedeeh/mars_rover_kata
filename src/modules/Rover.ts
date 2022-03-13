export default class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    if(x >= 0 && y >= 0) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('Coordinates should be bigger than or equal to 0');
    }
    if(direction === 'N' || direction === 'S' || direction === 'W' || direction === 'E') {
      this.direction = direction;
    } else {
      throw new Error('Direction should be 1 letter of N, S, W or E');
    } 
  }
  
  /** 
   * Implements the functionality to move the Rover 
   * @param instructions - given a string of letters to move the Rover; R, L, M  
  */
  movement(instructions: string): void {
    instructions.split('').forEach(letter => {
      if(letter === 'L' || letter === 'R' || letter === 'M') {
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
                if(this.y !== 0) {
                  this.y -= 1;
                } else {
                  throw new Error('y coordinate should be bigger than or equal to 0');
                }
                break;
              case 'W':
                if(this.x !== 0) {
                  this.y -= 1;
                } else {
                  throw new Error('x coordinate should be bigger than or equal to 0');
                }
                this.x -= 1;
                break;
              case 'E':
                this.x += 1;
                break;
            }
            break;
          }
        } else {
          throw new Error('Instructions may include letter L, R and M');
        }
    });
  }
}