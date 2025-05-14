# Head First Javascript Programming

This is the repository for my code going through the book [_Head First Javascript_ by Eric Freedman and Elizabeth Robson](https://www.amazon.com/Head-First-JavaScript-Programming-Learners/dp/1098147944/).  I'll organize my work by chapter in the book. I'll note that oftentimes the goal is to make something semi-useful, so they start simple and build functionality as chapters progress.

## Chapter 1
Mostly intro stuff. Interacting with the `console.log` and using the `alert` function.

## Chapter 2
Basic battleship game. It is purely text based, and has a major logical flaw (repeated hits to the same location increment the total hits)

## Chapter 3
This is all about functions. If I were less experienced with functions in general, I'd do some of the examples. At this point, we aren't adding to the battleship game, so there's no code that I'm adding.

### Basic syntax 

```
function = funcName(input1, input2, ...) {
	function code goes here;
	
	return funcOutput;
```

## Chapter 4
This is all about arrays. Again, I don't see the personal utility of going through the coding exercises on the computer. I'm doing the activities in the book with pen/paper.

### Basic syntax

Arrays are in square brackets, and are zero-indexed

```
array = ["item1", "item2", "item3];
\\ array[1] maps to "item2"

array.length \\ is the length of the array (3 in this case)
```

If I wanted to print everything in an array to the console, I would do this:

```
for (let i = 0; i < array.length, i++){
	let output = "Array element #" + i + "is: " + array[i]
	console.log(output)
}
```

## Chapter 5
All about objects. These are structured something like classes in python where there are objects with properties and methods (functions which apply to the object).

### Basic syntax

```
let objectName = {
	property1 : "Value1",
	property2 : "Value2",
	...
	propertyN : "ValueN"
}

objectName.property2 -> "Value2"
```

## Chapter 6 Getting to know the DOM
DOM = Document Object Model. This is all about how a document gets put together, and how JavaScript can interact with HTML (read, write, modify). Basically HTML documents obey a tree structure, and this can be accessed through functions like

- `getElementById` 
- `getAttribute`

## Chapter 7 Serious Types
This is more about types of objects and how they can be compared.  For example, if I try to compare `1 == "1"` it gives `true` because non-numeric types are coerced to numeric if the data type doesn't match.  We can force strict equality with the `===` comparison instead so that `1 === "1"` outputs `false`.

## Aside
So far, the HTML has been almost a distraction. That is, the HTML has merely been a placeholder to allow you to access the console.log on your browser and familiarize with developer tools on your browser of choice. Even the "report" for the "boss" in Chapter 4 has been produced entirely on the console. If you have experience with other programming languages, this might be the best place to start, and you use the previous chapters/sections for syntax help.  I know this isn't exactly what the authors suggest, and depending on your level of experience, your mileage may vary.


