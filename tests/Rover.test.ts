import { Direction, Rover } from '../src/modules/Rover';

describe('Rover', () => {
  const instructions = 'LM'
  const direction: Direction = 'N'

  test.each([
    {x: 3, y: 10},
    {x: 0, y: 0},
    {x: 25, y: 10},
    {x: 15, y: 15},
    {x: 25, y: 25}
  ])(`returns a rover with valid coordinates`, ({x, y}) => {
    const rover = new Rover(x, y, direction, instructions) 
    expect(rover.hasRoverValidCoordinates(x, y)).toBeTruthy;
  });

  test.each([
    {x: -1, y: 2},
    {x: -1, y: -2},
    {x: 1, y: -2},
  ])('throws an error if x or y are negative numbers', ({x, y}) => {
    expect(() => {
      const rover = new Rover(x, y, direction, instructions)
      rover.hasRoverValidCoordinates(x, y)
    }).toThrow('Coordinates should be bigger than or equal to 0');
  })

});



