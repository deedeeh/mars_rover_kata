# Mars Rover Kata

## Introduction

This repo is to work with TypeScript and learn more about it in a Test-driven development environment using jest. The kata is to design a software to manage rovers for Mars exploration 🔎

***

## Key Features 

💡 A plateau class with coordinates inputs `(x, y)`

💡 A rover class with coordinates, direction and instructions inputs `(x, y, direction, instructions)`

💡 A function `moveRoversOnMars` that takes a `plateau`, `rovers` array and the required `rover` to move. It implements functionality checks and returns the output for the requested rover.  

💡 Given instructions input to rover `isValidMovement` checks if rover next movement is still in plateau range and based on that it moves or it stops. 

💡 Two helper functions `directionsFunctionality` and `isValidMove` that are called in `isValidMovement`

***

## Assumptions

-  Rover starting point might be out of range comparing to plateau. 

-  The rover might fall off plateau if it doesn't know its coordinates in each step comparing to the plateau's available space. 

-  Instructions might be given in lowercase or invalid letters.

-  Directions might be given in lowercase or invalid direction.

-  If there is more than 1 rover on the plateau a collision might happen whether it is a starting point, in the middle of moving instructions or at the end after completing the instructions. (Future Thoughts)

***

## Approaches

Two classes and an index that manages functionality is the design approach I decided to adopt and the reason is separation of concerns. 

The main `moveRoverOnMars` function was getting really messy and huge so it was time to refactor by breaking down my functionalities into separate functions and think of better ways to maintain the program. 

The current program version handles checks for rovers to be in Mars plateau range and not falling off!

***

## Future Thoughts

The current plateau version could be rectangular or square but not other shapes so in order to consider other shapes I believe there will be more coding lines in plateau class, `isValidMove` and a small change in `isValidMovement`.

This solution supports other vehicles by given `(x, y)` coordinates but that might be not the case with different shaped plateaus.

Currently the program accepts more than one rover on the same plateau but it doesn't handle collisions for multiple rovers so this is something that could be done next.

***

## Want to check it in action? 🤔

1. Fork this repo to your Github and then clone the forked version locally to your machine.

2. You need to install the packages in package.json by running:

    `npm install` 
 
 3. You can run the unit tests in your terminal by running:
 
    `npm test`

***












