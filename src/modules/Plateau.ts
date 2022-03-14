export default class Plateau {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    if((x >= 3 && x <= 25) && (y >= 3 && y <= 25)) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('Coordinates should be bigger than 2 and less than 26'); 
    }
  }
}