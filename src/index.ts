import Plateau from "./modules/Plateau"
import Rover from "./modules/Rover"

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
  */

const isValidMovement = (plateau: Plateau, rover: Rover, instructions: string): boolean => {
  let isValid = true; 

  instructions.toUpperCase().split('').forEach(letter => {
    switch(letter) {
      case 'L': 
        switch(rover.direction) {
          case 'N':
            rover.direction = 'W';
            break;
          case 'S':
            rover.direction = 'E';
            break;
          case 'W':
            rover.direction = 'S';
            break;
          case 'E':
            rover.direction = 'N';
            break;
        }
        break;
      case 'R':
        switch(rover.direction) {
          case 'N':
            rover.direction = 'E';
            break;
          case 'S':
            rover.direction = 'W';
            break;
          case 'W':
            rover.direction = 'N';
            break;
          case 'E':
            rover.direction = 'S';
            break;
        }
        break;
      case 'M': 
        switch(rover.direction) {
          case 'N':
            if(plateau.y > rover.y) {
              rover.y += 1; 
              isValid;
            } else {
              isValid = false;
            }
          break;
          case 'S':
            if(rover.y > 0) {
              rover.y -= 1; 
              isValid;
            } else {
              isValid = false;
            }
          break;
          case 'W':
            if(rover.x > 0) {
              rover.x -= 1;
              isValid;
            } else {
              isValid = false
            }
          break
          case 'E':
            if(plateau.x > rover.x) {
              rover.x += 1;
              isValid;
            } else {
              isValid = false;
            }
          break;
        }
      break;
      default: 
        throw new Error('Instructions may include letter L, R and M');
      }
  });
  return isValid;
}