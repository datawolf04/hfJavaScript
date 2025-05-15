/*
battleship.js

Code for my battleship game
*/

// This updates the view on the page
let view = {
    displayMessage(msg) {
	let messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
    },
    displayHit(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class","hit");
    },
    displayMiss(location) {
	let cell = document.getElementById(location);
	cell.setAttribute("class","miss");
    }
}

// This is a model of the game state with all of the needed properties
let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    // Initialize ships object
    ships: [{ locations: [0, 0, 0], hits: ["", "", ""]},
	    { locations: [0, 0, 0], hits: ["", "", ""]},
	    { locations: [0, 0, 0], hits: ["", "", ""]}],
    // Generate ship locations randomly
    generateShipLocations() {
	let locations;
	for (let i = 0; i < this.numShips; i++){
	    do {
		locations = this.generateShip();
	    } while (this.collision(locations));
	    this.ships[i].locations = locations;
	}
    },
    // Generate a random ship location
    generateShip() {
	let direction = Math.floor(Math.random() * 2);
	let row;
	let col;

	if (direction === 1) {
	    // Ship is horizontal
	    row = Math.floor(Math.random() * this.boardSize);
	    col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
	} else {
	    // Ship is vertical
	    col = Math.floor(Math.random() * this.boardSize);
	    row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
	}

	let newShipLocations = [];
	for (let i = 0; i < this.shipLength; i++) {
	    if (direction === 1) {
		newShipLocations.push(`${row}${(col+i)}`);
	    } else {
		newShipLocations.push(`${(row+i)}${col}`);
	    }
	}
	return newShipLocations;
    },
    // Test to see if the ship location "collides" with another ship
    collision (locations) {
	for (let i = 0; i < this.numShips; i++) {
	    let ship = this.ships[i];
	    for (let j = 0; j < locations.length; j++) {
		if (ship.locations.includes(locations[j])) {
		    return true;
		}
	    }
	}
	return false;
    },
    // Accept the input from the form and determine if there is a hit/miss
    fire(guess) {
	for (let i = 0; i < this.numShips; i++) {
	    // Iterate over the ships
	    let ship = this.ships[i];
	    let index = ship.locations.indexOf(guess);
	    if (index >= 0) {
		if (ship.hits[index] == "hit") {
		    // Ship was already hit
		    view.displayMessage("You already guessed there");
		    return false;
		} else {
		    // We have a (new) hit
		    ship.hits[index] = "hit";
		    // Change the page/send message
		    view.displayHit(guess);
		    view.displayMessage("HIT!");
		    // If ship is sunk, increment number of sunk ships.
		    if (this.isSunk(ship)) {
			// Message
			view.displayMessage("You sunk my battleship!");
			this.shipsSunk++;
		    }
		    return true;
		}
	    } 
	}
	// We have a miss. Change the page and display a message
	view.displayMiss(guess);
	view.displayMessage("You missed.");
	return false;
    },
    // Test if ship is sunk
    isSunk(ship) {
	return (!ship.hits.includes(""));
    }
};

// Now we need to update the model and process guesses so that the page is interactive.
let controller = {
    guesses: 0,
    // Function that takes an input of the form "C3" and outputs the corresponding cell ID
    parseGuess(guess) {
	// Only letters on our battleship grid
	const alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
	    alert("Oops, please enter a letter and a number on the board.");
	} else {
	    let firstChar = guess.charAt(0);
	    let row = alphabet.indexOf(firstChar.toUpperCase());
	    let column = guess.charAt(1);

	    if (isNaN(column)) {
		alert("Oops, that isn't on the board.");
	    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
		alert("Oops, that is off the board!");
	    } else {
		return row + column;
	    }
	}
	return null;
    },
    // Process a guess from the form
    processGuess(guess) {
	let location = this.parseGuess(guess);
	if (location !== null) {
	    this.guesses++;
	    // true/false output of model fire. This also updates the page
	    let hit = model.fire(location);
	    if (hit && model.shipsSunk === model.numShips) {
		view.displayMessage(`You sank all my battleships in ${this.guesses} guesses`);
	    }
	}
    },
    processClick(location) {
	this.guesses++;
	let hit = model.fire(location);
	if (hit && model.shipsSunk === model.numShips) {
	    view.displayMessage(`You sank all my battleships in ${this.guesses} guesses`);
	}
    }
}

// Handler function
function init() {
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    // Allow for pressing return key instead of clicking fire button
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    // Allow for clicking instead of typing
    window.onclick = handleOtherClick;
    // Randomly place the ships on the board
    model.generateShipLocations();
}

// get value from form
function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    // Pass the guess to the controller
    controller.processGuess(guess);
    // Reset the form
    guessInput.value = "";
}

// Allow hitting return (keyCode 13) to be the same as clicking the fire button
function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
	fireButton.click();
	return false;
    }
}

function handleOtherClick(event) {
    const targetElement = event.target;
    let targetId = targetElement.id;
    if (targetId !== null && targetId.length === 2) {
	controller.processClick(targetId);
    }
}

window.onload = init;



