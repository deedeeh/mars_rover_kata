import { Plateau } from "./modules/Plateau"
import { Direction, Rover } from "./modules/Rover"

interface Rotation {
  N: Direction;
  S: Direction;
  W: Direction;
  E: Direction;
}

/** 
   * The output function of Mars Rover Kata 
   * @param plateau - type Plateau 
   * @param rovers - Array of type Rover 
   * @param theRover - type Rover it applies functionality on the current rover in an array of rovers 
   * @returns the current rover new coordinates after finishing moving instructions or a message with the last coordinates in plateau range before it stopped moving.
  */

export const moveRoversOnPlateau = (plateau: Plateau, rovers: Array<Rover>, theRover: Rover): string => {
  let isValid = false;
  const index = rovers.indexOf(theRover);
  const foundRover = rovers[index]; 
  
  if(plateau.x >= foundRover.x && plateau.y >= foundRover.y) {
    isValid = isValidMovement(plateau, foundRover);
  } else {
    throw new Error('Plateau given coordinates must be bigger than or equal to rover given coordinates.');
  }

  return isValid ? `${foundRover.x}, ${foundRover.y}, ${foundRover.direction}`
  : `Rover is going to be out of plateau range. It stopped moving at coordinates (${foundRover.x}, ${foundRover.y}, ${foundRover.direction})`
}

/** 
   * Implements the functionality and logic behind moving the rover on Mars without falling off the Plateau range
   * @param plateau - type Plateau 
   * @param rover - type Rover 
   * @returns the value true if rover completed the full instructions and still in plateau range or false if it stopped in the middle.
  */

const isValidMovement = (plateau: Plateau, rover: Rover): boolean => {
  const directionsL: Rotation = {N: 'W', S: 'E', W: 'S', E: 'N'}
  const directionsR: Rotation = {N: 'E', S: 'W', W: 'N', E: 'S'}
  let isValid = true; 

  rover.instructions.toUpperCase().split('').forEach(letter => {
    switch(letter) {
      case 'L': 
        rover.direction = directionsFunctionality(directionsL, rover);
        break;
      case 'R':
        rover.direction = directionsFunctionality(directionsR, rover);
        break;
      case 'M': 
        isValid = isValidMove(plateau, rover);
        break;
      default: 
        throw new Error('Instructions may include letter L, R and M');
      }
  });
  return isValid;
}

/** 
   * Implements the functionality of rover direction when moving left or right
   * @param rotations - type Rotation  
   * @param rover - type Rover 
   * @returns the rover new direction based on L or R
  */

const directionsFunctionality = (rotations: Rotation, rover: Rover): Direction => {
  const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>
  const foundKey = getKeys(rotations).find(rotation => rotation === rover.direction) || 'N';
  return rotations[foundKey];
}

/** 
   * Implements the functionality of rover movement on Plateau based on rover direction
   * @param plateau - type Plateau  
   * @param rover - type Rover 
   * @returns the value true if rover is still in plateau range after the move or otherwise false
  */

const isValidMove = (plateau: Plateau, rover: Rover): boolean => {
  let isValid = true;
  switch(rover.direction) {
    case 'N':
      plateau.y > rover.y ? rover.y += 1 : isValid = false;
    break;
    case 'S':
      rover.y > 0 ? rover.y -= 1 : isValid = false;
    break;
    case 'W':
      rover.x > 0 ? rover.x -= 1 : isValid = false
    break
    case 'E':
      plateau.x > rover.x ? rover.x += 1 : isValid = false;
    break;
  }
  return isValid;
} 

