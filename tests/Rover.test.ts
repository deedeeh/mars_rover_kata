import Rover from '../src/modules/Rover';

describe('Rover', () => {
  test('throws an error if x or y is negative number', () => {
    expect(() => {
      new Rover(-1, 0, 'N')
    }).toThrow('Coordinates should be bigger than or equal to 0')
  });

  test.each([
    {x: 1, y: 2, direction: 'N'},
    {x: 0, y: 2, direction: 'S'},
    {x: 0, y: 6, direction: 'W'},
    {x: 2, y: 2, direction: 'E'},
  ])('returns new rover when passed coordinates ($x, $y) and direction $direction', ({x, y, direction}) => {
    const rover = new Rover(x, y, direction);
    expect(rover).toBeTruthy;
  })
});
