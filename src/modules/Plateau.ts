export default class Plateau {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    if(x >= 3 && y >= 3 ) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('Coordinates should be bigger than 2'); 
    }
  }
}