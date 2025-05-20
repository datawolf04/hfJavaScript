class Car {
    constructor(make, model, year, color, passengers, convertable, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passengers = passengers;
        this.convertable = convertable;
        this.mileage = mileage;
        this.started = false;
    }
    start() {
        if (this.started) {
            console.log(`The ${this.make} ${this.model} is already running.`);
        } else {
            this.started = true;
            console.log(`The ${this.make} ${this.model} is started.`);
        }
    }
    stop() {
        if (!this.started) {
            console.log(`The ${this.make} ${this.model} is already stopped.`);
        } else {
            this.started = false;
            console.log(`The ${this.make} ${this.model} is stopped.`);
        }
    }
    drive () {
        if (this.started) {
            console.log(`The ${this.make} ${this.model} goes zoom zoom!`);
        } else {
            console.log(`Start the ${this.make} ${this.model} first.`);
        }
    }
    brake () {
        if (this.started) {
            console.log(`The ${this.make} ${this.model} is braking.`);
        } else {
            console.log(`Start the ${this.make} ${this.model} first.`);
        }
    }
}

let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, true, 12892);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

let cars = [chevy, cadi, fiat];

/*
cars.forEach(car => {
    car.drive();
    car.start();
    car.drive();
    car.brake();
    car.drive();
    car.stop();
});
*/

class Taxi extends Car {
    constructor(make, model, year, color, passengers, convertable, mileage, fare) {
        super(make, model, year, color, passengers, convertable, mileage);
        this.occupied = false;
        this.fare = fare;
    }
    hail () {
        if (!this.occupied) {
            console.log(`The ${this.make} ${this.model} is available for hire.`);
            this.occupied = true;
        }
        else {
            console.log(`The ${this.make} ${this.model} is already occupied.`);
        }   
    }
    pay () {
        if (this.occupied) {
            console.log(`The ${this.make} ${this.model} says that will be \$${this.fare.toFixed(2)}.`);
            this.occupied = false;
        }
        else {
            console.log(`The ${this.make} ${this.model} is not occupied.`);
        }
    }
}

let taxi = new Taxi("Webville Motors", "Taxi", 1961, "yellow", 3, false, 7340, 2.50);
taxi.start();
taxi.hail();
taxi.drive();
taxi.stop();
taxi.pay();

class RocketCar extends Car {
    constructor(make, model, year, color, passengers, convertable, mileage) {
        super(make, model, year, color, passengers, convertable, mileage);
        this.thrustOn = false
    }
    drive () {
        super.drive();
        if (this.thrustOn) {
            console.log(`The ${this.make} ${this.model} goes zoom zoom with rocket power!`);
        }
    }
    thrust () {
        if (!this.thrustOn) {
            this.thrustOn = true;
        } else {
            this.thrustOn = false;
        }
    }
}
