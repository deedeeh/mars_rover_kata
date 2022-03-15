import Plateau from "./modules/Plateau"
import Rover from "./modules/Rover"

interface Directions {
  N: string;
  S: string;
  W: string;
  E: string;
}

/** 
   * The output function of Mars Rover Kata 
   *   
   * @param plateau - type Plateau 
   * @param rover - type Rover 
   * @param instructions - given a string of letters to move the Rover; R, L, M
   * @returns the new rover coordinates or a message with the last coordinates in plateau range before it stopped moving.
  */

export const moveRoverOnPlateau = (plateau: Plateau, rover: Rover, instructions: string): string => {
  let isValid = false;

  if(plateau.x >= rover.x && plateau.y > rover.y) {
    isValid = isValidMovement(plateau, rover, instructions);
  } else {
    throw new Error('Plateau given coordinates must be bigger than or equal to rover given coordinates.');
  }
  
  if(isValid === true) {
    return `${rover.x}, ${rover.y}, ${rover.direction}`
  } else {
    return `Rover is going to be out of plateau range. It stopped moving at coordinates (${rover.x}, ${rover.y}, ${rover.direction})`
  }
}

/** 
   * Implements the functionality and logic behind moving the rover on Mars without falling off the Plateau range
   * @param plateau - type Plateau 
   * @param rover - type Rover 
   * @param instructions - given a string of letters to move the Rover; R, L, M  
   * @returns the value true if rover completed the full instructions and still in plateau range or false if it stopped in the middle.
  */

const isValidMovement = (plateau: Plateau, rover: Rover, instructions: string): boolean => {
  const directionsL = {N: 'W', S: 'E', W: 'S', E: 'N'}
  const directionsR = {N: 'E', S: 'W', W: 'N', E: 'S'}
  let isValid = true; 

  instructions.toUpperCase().split('').forEach(letter => {
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
   * @param directions - type Directions  
   * @param rover - type Rover 
   * @returns the rover new direction based on L or R
  */

const directionsFunctionality = (directions: Directions, rover: Rover): string => {
  const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>
  const foundKey = getKeys(directions).find(direction => direction === rover.direction) || 'N';
  return directions[foundKey];
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

