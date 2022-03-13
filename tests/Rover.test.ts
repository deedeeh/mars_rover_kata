import Rover from '../src/modules/Rover';

describe('Rover', () => {
  test.each([
    {x: -1, y: 2, direction: 'N'},
    {x: -1, y: -2, direction: 'N'},
    {x: 1, y: -2, direction: 'N'},
  ])('throws an error if x or y are negative numbers', ({x, y, direction}) => {
    expect(() => {
      new Rover(x, y, direction)
    }).toThrow('Coordinates should be bigger than or equal to 0');
  })

  test.each([
    {x: 1, y: 2, direction: 'A'},
    {x: 1, y: 2, direction: 'AB'},
    {x: 1, y: 2, direction: 'NN'},
    {x: 1, y: 2, direction: 'n'},
    {x: 1, y: 2, direction: 'Ne'},
  ])('throws an error if direction is not N, S, W or E', ({x, y, direction}) => {
    expect(() => {
      new Rover(x, y, direction);
    }).toThrow('Direction should be 1 capital letter of N, S, W or E');
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

test.each([
  {x: 0, y: 1, direction: 'N', instructions: 'LM'},
  {x: 1, y: 1, direction: 'S', instructions: 'RMML'},
])('throws an error if x coordinate is negative number after rover movement', ({x, y, direction, instructions}) => {
  expect(() => {
    const rover = new Rover(x, y, direction);
    rover.movement(instructions);
  }).toThrow('x coordinate should be bigger than or equal to 0');
});

test.each([
  {x: 1, y: 0, direction: 'W', instructions: 'LM'},
  {x: 1, y: 1, direction: 'E', instructions: 'RMML'},
])('throws an error if y coordinate is negative number after rover movement', ({x, y, direction, instructions}) => {
  expect(() => {
    const rover = new Rover(x, y, direction);
    rover.movement(instructions);
  }).toThrow('y coordinate should be bigger than or equal to 0');
});

test.each([
  {x: 1, y: 2, direction: 'W', instructions: 'LMMB'},
  {x: 1, y: 2, direction: 'E', instructions: 'MRRAA'},
])('throws an error if instructions includes letters that are not L, R and M', ({x, y, direction, instructions}) => {
  expect(() => {
    const rover = new Rover(x, y, direction);
    rover.movement(instructions);
  }).toThrow('Instructions may include letter L, R and M');
});

test.each([
  {x: 1, y: 2, direction: 'N', instructions: 'LMLMLMLMM', expected: {x: 1, y: 3, direction: 'N'}},
  {x: 3, y: 3, direction: 'E', instructions: 'MMRMMRMRRM', expected: {x: 5, y: 1, direction: 'E'}},
  {x: 2, y: 3, direction: 'W', instructions: 'LLMRMMRM', expected: {x: 2, y: 1, direction: 'W'}},
])('returns the correct result when given coordinates ($x, $y),direction $direction and instructions $instructions', ({x, y, direction, instructions, expected}) => {
  const rover = new Rover(x, y, direction);
  rover.movement(instructions);
  expect(rover).toEqual(expected);
});

test.each([
  {x: 1, y: 2, direction: 'N', instructions: 'lmlmlmlmm', expected: {x: 1, y: 3, direction: 'N'}},
  {x: 3, y: 3, direction: 'E', instructions: 'MmrMMrmrRM', expected: {x: 5, y: 1, direction: 'E'}},
])('ignores case sensitive letters in instructions', ({x, y, direction, instructions, expected}) => {
  const rover = new Rover(x, y, direction);
  rover.movement(instructions);
  expect(rover).toEqual(expected);
});



