/* A visitor receives a prompt upon opening the website to enter a 
list of comma-separated froyo flavors. They type vanilla,vanilla,
vanilla,strawberry,coffee,coffee. When they view the browser console, 
they observe a table listing how many of each flavor they have ordered.
 In this case, they will be able to observe that they have ordered 
 three vanilla, two coffee, and one strawberry froyo. */

// Step 1: create a user prompt function
const froyoOrder = prompt(
  "Enter a froyo order and separate each item by commas"
);

// Step 2: take that input data and put it into a console table as an array
const froyoOrderArray = froyoOrder.split(",");
console.table(froyoOrderArray);

// Step 3: create a frequency counter using a loop and a conditional statement
const freqCounter = {};
for (let i = 0; i < froyoOrder.length; i++) {
  const item = froyoOrderArray[i];
  if (item in freqCounter) {
    freqCounter[item]++;
  } else {
    freqCounter[item] = 1;
  }
}
console.table(freqCounter);
