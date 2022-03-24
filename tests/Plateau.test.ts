import {MIN_PLATEAU_SIZE, MAX_PLATEAU_SIZE, Plateau} from "../src/modules/Plateau";

describe('Plateau', () => {
  test.each([
    {x: 3, y: 25},
    {x: 5, y: 15},
    {x: 25, y: 10},
    {x: 15, y: 15},
    {x: 25, y: 25}
  ])(`returns a plateau coordinates between numbers ${MIN_PLATEAU_SIZE} and ${MAX_PLATEAU_SIZE}`, ({x, y}) => {
    const plateau = new Plateau(x, y) 
    expect(plateau).toBeTruthy;
  });

  test.each([
    {x: 2, y: 26},
    {x: 0, y: 0},
    {x: 26, y: 25},
    {x: 6, y: 2},
    {x: 30, y: 30}
  ])(`throws an error if coordinates are less than ${MIN_PLATEAU_SIZE} and more than ${MAX_PLATEAU_SIZE}`, ({x, y}) => {
    expect(() => {
      new Plateau(x, y);
    }).toThrow(`Coordinates should be between ${MIN_PLATEAU_SIZE} and ${MAX_PLATEAU_SIZE}. You entered ${x} and ${y}`);
  })
})