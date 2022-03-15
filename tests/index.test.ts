import { moveRoverOnPlateau } from '../src/index'
import Plateau from '../src/modules/Plateau';
import Rover from '../src/modules/Rover';

describe('moveRoverOnPlateau', () => {

  test.each([
    {plateauX: 4, plateauY: 4, roverX: 1, roverY: 3, direction: 'N', instructions: 'LMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (0, 3, W)'},
    {plateauX: 5, plateauY: 6, roverX: 1, roverY: 2, direction: 'W', instructions: 'LMMRMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (0, 0, W)'},
    {plateauX: 10, plateauY: 5, roverX: 8, roverY: 4, direction: 'E', instructions: 'LMRMMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (10, 5, E)'},
  ])('returns a string contains last rover coordinates and direction in plateau range before it stopped', ({plateauX, plateauY, roverX, roverY, direction, instructions, expected}) => {
    //Arrange
    const plateau = new Plateau(plateauX, plateauY);
    const rover = new Rover(roverX, roverY, direction);

    //Act 
    const movedRoverOnPlateau = moveRoverOnPlateau(plateau, rover, instructions);

    //Assert
    expect(movedRoverOnPlateau).toBe(expected);
  })

  test.each([ {plateauX: 5, plateauY: 5, roverX: 10, roverY: 5, direction: 'N', instructions: 'LM'},
  {plateauX: 5, plateauY: 5, roverX: 4, roverY: 12, direction: 'N', instructions: 'LMLMLMLMM'},
  {plateauX: 5, plateauY: 5, roverX: 8, roverY: 8, direction: 'E', instructions: 'MMRMMRMRRM'},
])('throws an error if rover given coordinates ($roverX, $roverY) are bigger than plateau given coordinates ($plateauX, $plateauY)', ({plateauX, plateauY, roverX, roverY, direction, instructions}) => {
  const plateau = new Plateau(plateauX, plateauY);
  const rover = new Rover(roverX, roverY, direction);
  expect(() => {
    moveRoverOnPlateau(plateau, rover, instructions);
  }).toThrow('Plateau given coordinates must be bigger than or equal to rover given coordinates.')
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

    //Act 
    const movedRoverOnPlateau = moveRoverOnPlateau(plateau, rover, instructions);

    //Assert
    expect(movedRoverOnPlateau).toBe(expected);
  });

});