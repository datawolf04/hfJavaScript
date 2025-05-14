# Head First Javascript Programming

This is the repository for my code going through the book [_Head First Javascript_ by Eric Freedman and Elizabeth Robson](https://www.amazon.com/Head-First-JavaScript-Programming-Learners/dp/1098147944/).  I'll organize my work by chapter in the book. I'll note that oftentimes the goal of the _Head first_ books is to make something and build it from simple to complex. So as I do this, I'm going to create a new folder for each chapter, and start with the previous chapter's work so that I'm not building from scratch each time. I'll also summarize my work and describe the chapters in the sections below.

## Chapter 1
Mostly intro stuff. Interacting with the `console.log` and using the `alert` function.  The code in the `chap01` folder goes through printing the _99 bottles of (root) beer_ song to the console.

### Basic syntax

```javascript
let variableName; // For an object that will not change throughout the code operation
const constantName; // For an object that will not change throughout the code operation
```

## Chapter 2
Basic battleship game. It is purely text based, and has a major logical flaw (repeated hits to the same location increment the total hits). It is also massively simplified (1 row by 7 column grid).  See code in `chap02` folder.

## Chapter 3
This is all about functions. If I were less experienced with functions in general, I'd do some of the examples. At this point, we aren't adding to the battleship game, so there's no code that I'm adding. However, I will make some basic notes on the syntax learned to reference.

### Basic syntax 

```javascript
function = funcName(input1, input2, ...) {
	// function code goes here;
	
	return funcOutput;
}
```

## Chapter 4
This is all about arrays. Again, there is not really a project/product being worked on here other than building knowledge. I'm doing the activities in the book with pen/paper.

### Basic syntax

Arrays are in square brackets, and are zero-indexed

```javascript
let array = ["item1", "item2", "item3"];
// array[1] maps to "item2"

array.length // is the length of the array (3 in this case)
```

If I wanted to print everything in an array to the console, I would do this:

```javascript
for (let i = 0; i < array.length, i++){
	let output = "Array element #" + i + "is: " + array[i]
	console.log(output)
}
```

## Chapter 5
All about objects. These are structured something like classes in python where there are objects with properties and methods (functions which apply to the object).

### Basic syntax

```javascript
let objectName = {
	property1 : "Value1",
	property2 : "Value2",
	// ... More properties as needed
	propertyN : "ValueN"
}

objectName.property2 // maps to "Value2"
```

## Chapter 6 Getting to know the DOM
DOM = Document Object Model. This is all about how a document gets put together, and how JavaScript can interact with HTML (read, write, modify). Basically HTML documents obey a tree structure, and this can be accessed through functions like the following.

- `getElementById` 
- `getAttribute`

I've learned a little bit about these when I've done some web scraping with R and Python, and this solidified the lessons that I learned in that context.

## Chapter 7 Serious Types
This is more about types of objects and how they can be compared.  For example, if I try to compare `1 == "1"` it gives `true` because non-numeric types are coerced to numeric if the data type doesn't match.  We can force strict equality with the `===` comparison instead so that `1 === "1"` outputs `false`.

## Aside/Commentary
So far, the HTML has been almost a distraction. That is, the HTML has merely been a placeholder to allow you to access the console.log on your browser and familiarize with developer tools on your browser of choice. Even the "report" for the "boss" in Chapter 4 was produced entirely on the console. If you have ***significant*** experience with other programming languages, this might be the best place to start, and you use the previous chapters/sections/google for syntax help.  (Also, a good IDE -- the authors don't make any suggestions there either -- would be helpful. I'm using emacs because, why not, though there are definitely other choices).  I know the "skip to the interesting bits" approach isn't exactly what the authors suggest, and goes somewhat against the grain of the *Head First (insert computer subject here)* ethos. However, I plan on slowing down now that things are becoming more different from my own previous experience. So I would say that this approach is working for me. Depending on your level of experience, your mileage may vary.

## Chapter 8 Building an app
***Coming Soon***: Let's play Battleship, for real this time. To quote the authors':

> We're going to bring everything together in this chapter to create our first true *web application*. No more *silly toy games* with one battleship and a single row of hiding places. In this chapter we're building the *entire experience*...Get ready: this is an all-out, pedal-to-the-metal development chapter where we're going to lay down some serious code.

Bet.
