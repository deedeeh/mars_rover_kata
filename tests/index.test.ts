import { moveRoverOnPlateau } from '../src/index'
import Plateau from '../src/modules/Plateau';
import Rover from '../src/modules/Rover';

describe('moveRoverOnPlateau', () => {

  test.each([ {plateauX: 5, plateauY: 5, roverX: 5, roverY: 5, direction: 'E', instructions: 'MM'},
  {plateauX: 5, plateauY: 5, roverX: 3, roverY: 4, direction: 'S', instructions: 'LMMMMRMLMM'},
  {plateauX: 4, plateauY: 4, roverX: 3, roverY: 3, direction: 'W', instructions: 'RMM'},
])('throws an error if rover coordinates will be bigger than plateau coordinates after moving', ({plateauX, plateauY, roverX, roverY, direction, instructions}) => {
  const plateau = new Plateau(plateauX, plateauY);
  const rover = new Rover(roverX, roverY, direction);
  const roverInstructions = instructions;
  expect(() => {
    moveRoverOnPlateau(plateau, rover, roverInstructions);
  }).toThrow('Rover coordinates will be bigger than plateau so rover stopped moving');
});

  test.each([ {plateauX: 5, plateauY: 5, roverX: 10, roverY: 5, direction: 'N', instructions: 'LM'},
  {plateauX: 5, plateauY: 5, roverX: 4, roverY: 12, direction: 'N', instructions: 'LMLMLMLMM'},
  {plateauX: 5, plateauY: 5, roverX: 8, roverY: 8, direction: 'E', instructions: 'MMRMMRMRRM'},
])('throws an error if rover coordinates ($roverX, $roverY) are bigger than plateau coordinates ($plateauX, $plateauY)', ({plateauX, plateauY, roverX, roverY, direction, instructions}) => {
  const plateau = new Plateau(plateauX, plateauY);
  const rover = new Rover(roverX, roverY, direction);
  const roverInstructions = instructions;
  expect(() => {
    moveRoverOnPlateau(plateau, rover, roverInstructions);
  }).toThrow('Plateau coordinates must be bigger than or equal to rover coordinates.')
});

  test.each([
    {plateauX: 5, plateauY: 5, roverX: 1, roverY: 1, direction: 'N', instructions: 'LM', expected: '0, 1, W'},
    {plateauX: 5, plateauY: 5, roverX: 1, roverY: 2, direction: 'N', instructions: 'LMLMLMLMM', expected: '1, 3, N'},
    {plateauX: 5, plateauY: 5, roverX: 3, roverY: 3, direction: 'E', instructions: 'MMRMMRMRRM', expected: '5, 1, E'},
    {plateauX: 10, plateauY: 8, roverX: 4, roverY: 2, direction: 'W', instructions: 'MRMLMRMMLM', expected: '1, 5, W'},
  ])('returns the correct corrdinates and direction after moving the rover on Mars plateau', ({plateauX, plateauY, roverX, roverY, direction, instructions, expected}) => {
    //Arrange
    const plateau = new Plateau(plateauX, plateauY);
    const rover = new Rover(roverX, roverY, direction);
    const roverInstructions = instructions;

    //Act 
    const movedRoverOnPlateau = moveRoverOnPlateau(plateau, rover, roverInstructions);

    //Assert
    expect(movedRoverOnPlateau).toBe(expected);
  });

});