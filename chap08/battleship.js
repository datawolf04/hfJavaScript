/*
battleship.js
Javascript for my battleship game.
*/

// Declare varaibles - for now, have the ship in a fixed location
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location1 + 2;

// Initialize game variables
let guess; // leave empty for now
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
    // Have player input guess
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

    // Check to ensure guess is valid
    if (guess < 0 || guess > 6) {
	alert("Please enter a valid cell number!");
    } else {
	guesses = guesses + 1;

	// Check to see if the guess has hit the target
	// Issue: I can guess locationx more than once and still increment hits
	if (guess == location1 || guess == location2 || guess == location3) {
	    alert("Hit!");
	    hits = hits + 1;
	    
	    // Win/end the game
	    if (hits == 3) {
		isSunk = true;
		alert("You sank my battleship!")
	    }
	    
	} else {
	    alert("Miss!");
	}
    }
}

let stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3/guesses);

alert(stats);


