import { moveRoverOnPlateau } from '../src/index'
import Plateau from '../src/modules/Plateau';
import Rover from '../src/modules/Rover';

describe('moveRoverOnPlateau', () => {

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