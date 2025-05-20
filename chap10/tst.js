function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

let fly = function(num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
}

/*
console.log(typeof quack);
console.log(typeof fly);
*/

let superFly = fly;
superFly(2);

let superQuack = quack;
superQuack(3);

// Shell game
let winner = function() { alert("Winner!"); }
let loser = function() { alert("Loser!"); }
// Test
//winner();
let a = winner;
let b = loser;
let c = loser;

//a();
//b();

// now play the shell game
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
// a();

let tempF = [32, 212, 98.6, -40];
let tempC = tempF.map((tF)=> (tF-32)*5/9); 
let lowTemps = tempF.filter((tF) => (tF < 20));
let totalTemp = tempF.reduce((acc, tF) => acc + tF, 0);
let avgTemp = totalTemp / tempF.length;

console.log(lowTemps);
console.log(totalTemp);
console.log(avgTemp);
