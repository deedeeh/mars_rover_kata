import Plateau from "./modules/Plateau"
import Rover from "./modules/Rover"

export const moveRoverOnPlateau = (plateau: Plateau, rover: Rover, instructions: string): string => {
  const marsPlateau = new Plateau(plateau.x, plateau.y);
  const theRover = new Rover(rover.x, rover.y, rover.direction);

  if(marsPlateau.x >= theRover.x && marsPlateau.y >= theRover.y) {
    theRover.movement(instructions);
  } else {
    throw new Error('Plateau coordinates must be bigger than or equal to rover coordinates.');
  }

  if(theRover.x > marsPlateau.x || theRover.y > marsPlateau.y) {
    throw new Error('Rover coordinates will be bigger than plateau so rover stopped moving')
  }
  
  return `${theRover.x}, ${theRover.y}, ${theRover.direction}`
}