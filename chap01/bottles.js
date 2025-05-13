const word = "bottles";
const singularWord = "bottle";

let count = 99;
let first = true;
while (count > 0) {
    if (first) {
	console.log(count + " " + word + " of beer on the wall");
	console.log(count + " " + word + " of beer,");
	console.log("Take one down, pass it around,");
	count = count - 1;
	first = false;
    } else if(count > 1) {
	console.log(count + " " + word + " of beer on the wall.");
	console.log(count + " " + word + " of beer on the wall");
	console.log(count + " " + word + " of beer,");
	console.log("Take one down, pass it around,");
	count = count - 1;	
    } else {
	console.log(count + " " + singularWord + " of beer on the wall.");
	console.log(count + " " + singularWord + " of beer on the wall");
	console.log(count + " " + singularWord + " of beer,");
	console.log("Take one down, pass it around,");
	count = count - 1;
	console.log("No more " + word + " of beer on the wall.");
    }
}
