import { moveRoverOnPlateau } from '../src/index'
import Plateau from '../src/modules/Plateau';
import Rover from '../src/modules/Rover';

describe('moveRoverOnPlateau', () => {

  test('returns a moved rover on plateau', () => {
    //Arrange
    const plateau = new Plateau(5, 5);
    const rover = new Rover(1, 1, 'N');
    const instructions = 'LM';

    //Act 
    const movedRoverOnPlateau = moveRoverOnPlateau(plateau, rover, instructions);

    //Assert
    expect(movedRoverOnPlateau).toEqual('0, 1, W');
  });
});



