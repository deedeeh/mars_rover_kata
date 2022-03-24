import { moveRoversOnPlateau } from '../src/index'
import { Plateau } from '../src/modules/Plateau';
import Rover from '../src/modules/Rover';

describe('moveRoversOnPlateau', () => {

  test.each([
    {
      plateau: {x: 4, y: 4}, 
      rover1: {x: 1, y: 3, direction: 'N', instructions: 'LMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (0, 3, W)'}, 
      rover2: {x: 2, y: 4, direction: 'N', instructions: 'RMLM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (3, 4, N)'}
    }, 
    {
      plateau: {x: 10, y: 5}, 
      rover1: {x: 2, y: 2, direction: 'N', instructions: 'LMLMMRMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (0, 0, W)'}, 
      rover2: {x: 8, y: 4, direction: 'E', instructions: 'LMRMMM', expected: 'Rover is going to be out of plateau range. It stopped moving at coordinates (10, 5, E)'}
    }, 
  ])('returns a string contains last rover coordinates and direction in plateau range before it stopped', ({plateau, rover1, rover2}) => {
    //Arrange
    const thePlateau = new Plateau(plateau.x, plateau.y);
    const rover_1 = new Rover(rover1.x, rover1.y, rover1.direction, rover1.instructions);
    const rover_2 = new Rover(rover2.x, rover2.y, rover2.direction, rover2.instructions);
    const rovers = [rover_1, rover_2];

    //Act 
    const movedRoverOnPlateau_1 = moveRoversOnPlateau(thePlateau, rovers, rover_1);
    const movedRoverOnPlateau_2 = moveRoversOnPlateau(thePlateau, rovers, rover_2);

    //Assert
    expect(movedRoverOnPlateau_1).toBe(rover1.expected);
    expect(movedRoverOnPlateau_2).toBe(rover2.expected);
  })

  test.each([ 
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 6, y: 5, direction: 'N', instructions: 'LM'},
    },
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 4, y: 12, direction: 'N', instructions: 'LMLMLMLMM'},
    },
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 8, y: 8, direction: 'E', instructions: 'MMRMMRMRRM'},
    },
  ])('throws an error if rover given coordinates ($rover.x, $rover.y) are bigger than plateau given coordinates ($plateau.x, $plateau.y)', ({plateau, rover}) => {
  const thePlateau = new Plateau(plateau.x, plateau.y);
  const theRover = new Rover(rover.x, rover.y, rover.direction, rover.instructions);
  const rovers = [theRover]

  expect(() => {
    moveRoversOnPlateau(thePlateau, rovers, theRover);
  }).toThrow('Plateau given coordinates must be bigger than or equal to rover given coordinates.')
});

  test.each([
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 1, y: 1, direction: 'N', instructions: 'LM', expected: '0, 1, W'},
    },
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 1, y: 2, direction: 'N', instructions: 'LMLMLMLMM', expected: '1, 3, N'},
    },
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 3, y: 3, direction: 'E', instructions: 'MMRMMRMRRM', expected: '5, 1, E'},
    },
    {
      plateau: {x: 10, y: 8}, 
      rover: {x: 4, y: 2, direction: 'W', instructions: 'MRMLMRMMLM', expected: '1, 5, W'},
    },
  ])('returns the correct corrdinates and direction after moving 1 rover on Mars plateau', ({plateau, rover}) => {
    //Arrange
    const thePlateau = new Plateau(plateau.x, plateau.y);
    const theRover = new Rover(rover.x, rover.y, rover.direction, rover.instructions);
    const rovers = [theRover]

    //Act 
    const movedRoverOnPlateau = moveRoversOnPlateau(thePlateau, rovers, theRover);

    //Assert
    expect(movedRoverOnPlateau).toBe(rover.expected);
  });

  test.each([
    {
      plateau: {x: 5, y: 5}, 
      rover1: {x: 3, y: 3, direction: 'E', instructions: 'MMRMMRMRRM', expected: '5, 1, E'},
      rover2: {x: 1, y: 2, direction: 'N', instructions: 'LMLMLMLMM', expected: '1, 3, N'}, 
    }, 
    {
      plateau: {x: 5, y: 5}, 
      rover1: {x: 1, y: 1, direction: 'N', instructions: 'LM', expected: '0, 1, W'},
      rover2: {x: 4, y: 2, direction: 'W', instructions: 'MRMLMRMMLM', expected: '1, 5, W'}, 
    },
  ])('returns the correct corrdinates and directions after moving multiple rovers on Mars plateau', ({plateau, rover1, rover2}) => {
    //Arrange
    const thePlateau = new Plateau(plateau.x, plateau.y);
    const rover_1 = new Rover(rover1.x, rover1.y, rover1.direction, rover1.instructions);
    const rover_2 = new Rover(rover2.x, rover2.y, rover2.direction, rover2.instructions);
    const rovers = [rover_1, rover_2];

    //Act 
    const movedRoverOnPlateau_1 = moveRoversOnPlateau(thePlateau, rovers, rover_1);
    const movedRoverOnPlateau_2 = moveRoversOnPlateau(thePlateau, rovers, rover_2);

    //Assert
    expect(movedRoverOnPlateau_1).toBe(rover1.expected);
    expect(movedRoverOnPlateau_2).toBe(rover2.expected);
  })

  test.each([
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 1, y: 2, direction: 'N', instructions: 'lmlmlmlmm', expected: '1, 3, N'},
    },
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 3, y: 3, direction: 'E', instructions: 'MmrMMrmrRM', expected: '5, 1, E'},
    },
  ])('ignores case sensitive letters in instructions', ({plateau, rover}) => {
    const thePlateau = new Plateau(plateau.x, plateau.y);
    const theRover = new Rover(rover.x, rover.y, rover.direction, rover.instructions);
    const rovers = [theRover]
    const movedRoverOnPlateau = moveRoversOnPlateau(thePlateau, rovers, theRover)
    expect(movedRoverOnPlateau).toEqual(rover.expected);
  });

  test.each([
    {
      plateau: {x: 5, y: 5}, 
      rover: {x: 1, y: 2, direction: 'W', instructions: 'LMMB'},
    },
    {
      plateau: {x: 8, y: 8}, 
      rover: {x: 1, y: 2, direction: 'E', instructions: 'MRRAA'},
    },
  ])('throws an error if instructions includes letters that are not L, R and M', ({plateau, rover}) => {
    const thePlateau = new Plateau(plateau.x, plateau.y);
    const theRover = new Rover(rover.x, rover.y, rover.direction, rover.instructions);
    const rovers = [theRover]
    expect(() => {
      moveRoversOnPlateau(thePlateau, rovers, theRover)
    }).toThrow('Instructions may include letter L, R and M');
  });

});