'use strict';

console.log('Course Notes');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Added function to demonstrate destructing the return of a function, see below.
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// This section of the course focuses purely on the theory here, so we won't be building much of a user experience.

// ARRAY DESTRUCTURING
// Destructuring is an ES6 feature and is a way of unpacking values from an array or an object into seperate variables. Destructuring is to break a complex data structure down into smaller, simpler structures.

const arr = [2, 3, 4];

// Without destructuring the array, we could bind each data point to a separate variable, but this is time consuming and annoying tp program and then later change.
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(`A: ${a}, B: ${b}, C: ${c}`);

// To destructure an array into variables much more quickly we can use the below syntax, the square braces are essential to use as we are destucturing an array. Using the square braces makes it look like we are making an array, but this is actually just the array destructuring syntax. The original array is not being changed or destroyed, only unpacked. For best results and avoiding potential busg, we should declare this as a const.
const [x, y, z] = arr;
console.log(`X: ${x}, Y: ${y}, Z: ${z}`);

// It does work if we declare this destructure event as a let or var, but declaring it as a const results in avoiding any strange behaviours such as the variables being changed later, a destructuring event is only important in each instance, so realistically we won't need to change the value of these variables often anyway.
let [one, two, three] = arr;
console.log(`One: ${one}, Two: ${two}, Three: ${three}`);

// However, if we try to do the exact same thing with an object instead we only get the values of undefined for each datapoint in the object. This is because when destructuring an object, the variable names we use have to match the names of the variables inside the object, otherwise the engine will look for the data by name, and not finding it, assign the variable as undefined.
const { alpha, beta, gamma, delta, epsilon, lambda } = restaurant;
console.log(alpha, beta, gamma, delta, epsilon, lambda);

// So this is how we should destructure an object, this time using the names of the variables in the object, and using curly braces.
const {
  restaurantName,
  address,
  categories,
  starterMenu,
  mainMenu,
  openingHours,
} = restaurant;
console.log(
  restaurantName,
  address,
  categories,
  starterMenu,
  mainMenu,
  openingHours
);

// We don't need to destructure everything within a datastructure, for example, we could only create two variables from a data structure containing more than two pieces of data. In the restuarant object, the categories property is an array containig four pieces of data, below, we only capture the first two:
let [main, secondary] = restaurant.categories;
console.log(`Main category is: ${main}, Secondary category is: ${secondary}`);

// We could also see all of the pieces of data in array by using a forEach iteration and then printing the data to the console, like so:
restaurant.categories.forEach(element => {
  const testValue = element;
  console.log(testValue);
});

// If we want to grab data say in the first and third position of an element, we can leave a hole in the destructure syntax like so:
let [main2, , secondary2] = restaurant.categories;
console.log(`Main category is: ${main2}, Secondary category is: ${secondary2}`);

// We could use destructuring to say, change the position of two different values, say if the restaurant's main category changes places with the secondary category. Below is how we could do this without destructuring, but it is a little more complex and annoying to write:

// We make a temporary variable to allow us to hold the value of one of the variables we want to change, then we change that variable to the new value, and change its counterpart with what the temporary variable is holding onto. If we didn't do it like this, it would be impossible for us just to swap the values as one change would have to happen before the other
const temp = main;
main = secondary;
secondary = temp;
console.log(`Main category is: ${main}, Secondary category is: ${secondary}`);

// But with destructuring, we can do this in a much simpler way. We make a new array of the values we want to switch in reverse order, or whatever order we want it to be, then we simply destructure that into the variables again. This way we don't need to define a temporary object, and we can just reassing variables instead of creating new ones.
const newArray = [secondary2, main2];
[main2, secondary2] = newArray;
console.log(`Main category is: ${main2}, Secondary category is: ${secondary2}`);

// We can also have a fucntion return an array and then destructure them into multiple variables. We get a function to return an array and then we instantly destructure that return as soon as the function returns it. Then we can log it etc. as we wish. This allows us to construct multiple variables etc. from one function return.
const [starterDish, mainDish] = restaurant.order(2, 0);
console.log(`Starter is: ${starterDish}, Main course is ${mainDish}`);

// Nested Arrays
// A nested array just counts as another value in the array at the top-level, so we could just grab out the whole array quite easily.

const nested = [2, 4, [5, 6]];
const [nested1, , nested2] = nested;
console.log(nested1, nested2);

// To get out all the values inside the nested array, we would have to destructure this array as soon as we get it. We do this by specifying another set of square braces around this array, to destructure it within our first destructuring.
const [i, , [j, k]] = nested;
console.log(i, j, k);

// It is a good idea not to nest things too deeply, as this makes this process a bit of a pain to work out and understand.

// If we have an array that is shorter than we thought, we will be trying to unpack variables from locations that don't even exist. This will cause an extra variables to have the value of undefined, it will not cause an error, but depending on our code this could easily lead to errors and bugs down the line.
const [p, q, r] = [8, 9];
console.log(p, q, r);

// We can set default values within the destructuring, like functions, these variables will assume the default value if they don't receive any other arguments or data to change into. The following code will log '8 9 1 1'. If we set the default value to a certain value that wouldn't come up in the data, we could easily match against this for error checking and other purposes.
const [d = 1, e = 1, f = 1, g = 1] = [8, 9];
console.log(d, e, f, g);

// DESTRUCTURING OBJECTS
