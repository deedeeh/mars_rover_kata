export const MIN_PLATEAU_SIZE = 3;
export const MAX_PLATEAU_SIZE = 25;

export class Plateau {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  isPlateauSizeValid(x: number, y: number): boolean {
    let isValid = false
    if((x >= MIN_PLATEAU_SIZE && x <= MAX_PLATEAU_SIZE) && (y >= MIN_PLATEAU_SIZE && y <= MAX_PLATEAU_SIZE)) {
      this.x = x;
      this.y = y;
      isValid = true;
    } else {
      throw new Error(`Coordinates should be between ${MIN_PLATEAU_SIZE} and ${MAX_PLATEAU_SIZE}. You entered ${x} and ${y}`); 
    }
    return isValid;
  }
}