/* A visitor receives a prompt upon opening the website to enter a 
list of comma-separated froyo flavors. They type vanilla,vanilla,
vanilla,strawberry,coffee,coffee. When they view the browser console, 
they observe a table listing how many of each flavor they have ordered.
 In this case, they will be able to observe that they have ordered 
 three vanilla, two coffee, and one strawberry froyo. */

// Step 1: create a general function and create a user prompt function
function froyoInputs(counter) {
  const froyoOrder = prompt(
    "Enter a froyo order and separate each item by commas"
  );

  // Step 2: take that input data and put it into a console table as an array
  const froyoOrderArray = froyoOrder.split(",");
  console.table(froyoOrderArray);

  // Step 3: create a frequency counter within a function using a loop and a conditional statement.  Return the freq counter variable

  function frequencyTracker(orderArray) {
    const freqCounter = {};
    for (let i = 0; i < orderArray.length; i++) {
      const item = orderArray[i].trim; //removes extra spaces
      if (item in freqCounter) {
        freqCounter[item]++;
      } else {
        freqCounter[item] = 1;
      }
    }
    console.table(freqCounter);
    return freqCounter;
  }
  return frequencyTracker(froyoOrderArray);
}
