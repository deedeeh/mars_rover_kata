# Mars Rover Kata

## Introduction

This repo is to work with TypeScript and learn more about it in a Test-driven development environment using jest. The kata is to design a software to manage rovers for Mars exploration 🔎

***

## Key Features

- A plateau class with coordinates inputs `(x, y)`

- A rover class with coordinates and direction inputs `(x, y, direction)`

- A function `moveRoverOnMars` that manages final functionality checks and returns the output.  

- Given instructions input to rover `isValidMovement` checks if rover next movement is still in plateau range and based on that it moves or it stops. 

- Two helper functions `directionsFunctionality` and `isValidMove` that are called in `isValidMovement`

***

## Assumptions

1. Rover starting point might be out of range comparing to plateau. 

2. The rover might fall off plateau if it doesn't know its coordinates in each step comparing to the plateau's available space. 

3. Instructions might be given in lowercase or invalid letters.

4. Directions might be given in lowercase or invalid direction.

***

## Approaches

Two classes and an index that manages functionality is the design approach I decided to adopt and the reason is separation of concerns. The main `moveRoverOnMars` function was getting really messy and huge so it was time to refactor by breaking down my functionalities into separate functions and think of better ways to implement functionality.

***

## Future Thoughts

The current plateau version could be rectangular or square but not other shapes so in order to consider other shapes I believe there will be more coding lines in plateau class, `isValidMove` and a small change in `isValidMovement`.

This solution supports other vehicles by given `(x, y)` coordinates but that might be not the case with different shaped plateaus.

***

## Want to check it in action?

1. Fork this repo to your Github and then clone the forked version locally to your machine.

2. You need to install the packages in package.json by running:

    `npm install` 
 
 3. You can run the unit tests in your terminal by running:
 
    `npm test`

***










