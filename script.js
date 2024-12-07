'use strict';

// NOTES
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

// NOTES
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

// NOTES
// DESTRUCTURING OBJECTS
// To desctructure objects, we use curly braces, instead of square brackets.
// We need to use the same name as the property in the object, rather than an custom variable name.

const restaurant2 = {
  restaurantName2: 'Classico Italiano',
  address2: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories2: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu2: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu2: ['Pizza', 'Pasta', 'Risotto'],
  openingHours2: {
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

  orderUp: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // We could handle destructuring within the object itself with a function that can be called later.
  destructure: function () {
    return this.restaurantName2, this.openingHours2, this.categories2;
  },

  // Function that can take in an object and destructure it to get the values it needs. We have destructured the object that gets passed into the function into four different variables that we can make use of. This is really just one argument that is destructured into 4 variables, as before, the names have to have the same name as the properties in the object, but the order does not need to be maintained.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'Address unknown',
  }) {
    console.log(`Your order details:`);
    console.log(`Starter: ${this.starterMenu2[starterIndex]}`);
    console.log(`Main: ${this.mainMenu2[mainIndex]}`);
    console.log(`Time: ${time}`);
    console.log(`Address: ${address}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  // Using a rest operator to capture the first value as the essential first ingredient, and then the remaining arguments captured in an array
  orderPizza: function (mainIngredient, ...otherIngredients) {
    if (!mainIngredient) {
      console.log(
        'You need to tell us at least one ingredient for your pizza!'
      );
      return;
    }
    console.log(
      `Building you a pizza with ${mainIngredient} as the main ingredient...`
    );
    if (otherIngredients) {
      for (const i in otherIngredients) {
        console.log(`and ${otherIngredients[i]},`);
      }
    }
    console.log(`and that's it!`);
  },
};

// We have to watch out that we didn't already destructure an object with these names, or that those created variables are in a different scope to these ones
const { restaurantName2, openingHours2, categories2 } = restaurant2;
console.log(restaurantName2);
console.log(openingHours2);
console.log(categories2);

// Calling the destructure function within the object.
const result = restaurant2.destructure();
console.log(result);

// If we want to use new names for our variables we can do this by specifying a new name after a colon like so. We can set better names and avoid clashing with other destructure events by setting specific names if we want to. (Like classicoItalianoHours etc.).
const {
  restaurantName2: newName,
  openingHours2: hours,
  categories2: tags,
} = restaurant2;
console.log(newName, hours, tags);

// When we are dealing with third-party data, we can set default values for the case that we are trying to read properties on an object that don't exist. e.g. we could be trying to read 'menu' from these objects where that may not exist.
const {
  menu = 'No menu found',
  starterMenu2: starters = 'No starters found',
  mainMenu2: mains = 'No mains found',
} = restaurant2;
console.log(`Menu: ${menu}, Starters: ${starters}, Mains: ${mains}`);

// Defaults are very useful when we are retrieving data, say from an API, and we do not know exactly what the data looks like ahead of time.

// Mutating variables while destructuring objects
// We cannot do this destructuring unless the entire destructuring line is within parentheses, otherwise it will try to make new variables instead of changing the variables we want changed.
let abba = 111;
let babba = 999;

console.log(abba, babba);

const obj = { abba: 23, babba: 7, cabba: 14 };

// Wrap this line in parentheses to make it work correctly.
({ abba, babba } = obj);

console.log(abba, babba);

// Destructuring nested objects in objects
// We need to open another destructuring set of curly braces after the property name that contains the object and a colon, as shown below.

// We can also set new variable names and default values as above.
const {
  fri: { open: op = 10, close: cl = 22 },
} = openingHours2;
console.log(op, cl);

// When passing arguments into a function it can get confusing for the user or programmer as to the order the values need to be passed in. To make things easier, we could pass in an object to a function that contains all the data needed in named fields, then destructure this inside to get things to work.

restaurant2.orderDelivery({
  time: '23:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Passing in an object that does not have all the properties the function is expecting, allowing us to test that the default values work properly.
restaurant2.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 2,
});

// NOTES
// THE SPREAD OPERATOR ...
// We can use the spread operator to unpack all elements in an array in one go.

// We might want to add values to the start of an array, below are two bad ways we could do this.
const arr2 = [7, 8, 9];

// We could manually add the two new numbers and then add the values at each position of the array from before.
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Or we could loop through the array and do this programmatically.
const badNewArr2 = [1, 2];
for (let i = 0; i < arr2.length; i++) {
  badNewArr2.push(arr2[i]);
}
console.log(badNewArr2);

// Both methods are not great and could be more intensive to write, even though the looping method is a bit better than the purely manual method.

// Using the spread operator allows us to insert all of the values in the old array as if they were individual values, so by writing ...arr2, we are adding 7, 8, 9 to the new array. This is much simpler to work with.
const newArr2 = [1, 2, ...arr2];
console.log(newArr2);

// This can be very useful for passing arrays into functions.

// The below command using the spread operator passes the contents of the array individually, so in this console.log we can see all the values as distinct and not in an array format.
console.log(...newArr2);

// We are creating a new array here, with all the items in the restaurant2 object's main menu array plus a new item 'Gnocchi'.
const newMenu = [...restaurant2.mainMenu2, 'Gnocchi'];
console.log(newMenu);

// The spread operator is a bit similar to destructuring, but the spread operator takes ALL of the values from an array WITHOUT making new variables. This means we can only really use it in places where we would be otherwise be writing values separated by commas.

// Important use cases of the spread operator
// Creating shallow copies of an array, this syntax is much simpler than using the Object.assign() syntax seen briefly before.
const mainMenuCopy = [...restaurant2.mainMenu2];
console.log(mainMenuCopy);

// Merging two arrays together
// We use the spread operator to add all of the elements from both arrays into one new array
const arrAlpha = ['Poo', 'Bum', 'Bottom'];
const arrBeta = ['Crim', 'Crom', 'Crooby'];
const joinedArr = [...arrAlpha, ...arrBeta];
console.log(joinedArr);

const fullMenu = [...restaurant2.starterMenu2, ...restaurant2.mainMenu2];
console.log(fullMenu);

// We can sort the elements in the arrays by alphabetical or numerical order by using the .sort() method, this isn't the best course in all situations, but can make the new array look tidier and more deliberate, not a random jumble of values.
const sortedMenu = fullMenu.sort();
console.log(sortedMenu);

// The spread operator also works on all iterable data types, not just arrays, this includes strings, arrays, maps and sets, but NOT objects.

// As strings are iterables, we can use the spread operator on a string as well. We can still only use the spread operator while building an array or passing in an argument to a function.
const str = 'Michael';

// Building an array of letters in a string.
const letters = [...str, ' ', 's.'];
console.log(letters);

// This statement does not expect multiple values separated by a comma, so it doesn't accept the spread operator. We cannot use the spread operator to create a template literal.
// console.log(`${...str}`);

// However, this works just for logging.
console.log(...str);

// To pass multiple values as an argument using the spread operator.
// We can build an array using prompts or other methods first.
// const ingredients = [
//   prompt('What first ingredient do you want?'),
//   prompt('What second ingredient do you want?'),
//   prompt('What third ingredient do you want?'),
// ];

const ingredients = ['mushrooms', 'beef', 'chicken'];

console.log(ingredients);

// Then we use the spread operator to pass this array into the function as separate values.
restaurant2.orderPasta(...ingredients);

// Since ES2018, the spread operator does actually work on objects, even though objects are not classed as iterables.

// We can create a new object by adding all the values from another object split apart using the spread operator, then any other new properties we want as well.
let newRestaurant = { foundedIn: 1998, ...restaurant2, founder: 'Guiseppe' };
console.log(JSON.stringify(newRestaurant, null, 2));

// We can use this to make a shallow copy of an object, this is again much simpler than using Object.assign() but we still have the problem of this being only one level deep. Then, we can change the values in the copy without affecting the original.
const restaurantCopy = { ...restaurant2 };
restaurantCopy.restaurantName2 = 'Ristorante Roma';
console.log(JSON.stringify(restaurantCopy, null, 2));
console.log(JSON.stringify(restaurant2, null, 2));

// NOTES
// THE REST PATTERN AND PARAMETERS ...
// The rest pattern bascially does the opposite of the spread operator, and is denoted by the same three dots. The rest pattern uses the exact same syntax, but collects multiple elements and packs them into an array.

// This is an example of using the SPREAD operator as it exists on the right side of the assignment operator (=).
const arr3 = [1, 2, ...[3, 4]];
console.log(arr3);

// But, it can also be on the left side of the assignment operator, in which case it becomes the REST pattern. It is called rest because it will take the remaining elements (the rest) of the array and put them in a new array.
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);

// We can use ... on both sides of the assignment operator, on the left side to capture the rest of the unused elements in an array/ object etc., and on the right side as the spread operator, to unpack all of the values in an array/ object etc.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant2.mainMenu2,
  ...restaurant2.starterMenu2,
];
// The result will be the value of pizza and risotto and then an array with all of other other unmentioned foods in it. The rest operator does not include any skipped elements, so it should always be last in the order. There can only be one rest operator in any one destructuring statement.
console.log(pizza, risotto, otherFood);

// This also works with objects, we can capture saturdays opening hours, and then all of the othewr days in one destructuring statement.
const { sat, ...weekDays } = restaurant2.openingHours2;
console.log(sat);
console.log(weekDays);

// The rest operator in functions.
// In this content, these are known as rest parameters. We take in an arbitrary number of arguments, which allows us to call the function with as many or as few arguments as we like, the rest operator collates all of these arguments into an array that can be iterated through.
const add = function (...values) {
  let total = 0;
  for (const i in values) {
    console.log(values[i]);
    total += values[i];
  }
  console.log(`Total: ${total}`);
  return total;
};

// Being able to accept any number of parameters makes this kind of function very scalable.
add(2, 3);

add(5, 3, 7, 2);

add(8, 2, 5, 3, 2, 1, 4);

// We could unpack an array using the spread operator while feeding it into the function as arguments, then, inside the argument, the rest operator collates them into an array that can be iterated through.
const ex = [23, 5, 7];
add(...ex);

// rest parameters are a very common feature in the construction of function in modern JavaScript.

// We only NEED to feed in one argument to the function, this is the essential mainIngredient, the other arugments are collated into an array using the rest operator by the function.
restaurant2.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant2.orderPizza('spinach');

// We can build in some internal logic for our function to tell the user if it does not have an essential ingredient.
restaurant2.orderPizza();

// NOTES
// SHORT CIRCUITING USING && AND ||
// We can do a lot more with the AND and OR operators.

// There are three other properties that apply to logical operators that aren't immediately apparent:
// 1. They can use any data type.
// 2. They can return any data type.
// 3. They can perform 'short-circuiting' or 'short-circuit-evaluation'.

// Using the OR operator ||:
// In 'short-circuiting', the expression will look for the first truthy value in the expression, so in this case, the console prints '3'. The expression will stop and not even look at the next value or values if it finds a truthy value, thus taking a kind of short cut through the evaluation expression.
console.log(3 || 'Michael'); // 3

// In this case, 0 is a falsey value, so the expression will return the next truthy value to be printed, in this case 'Ayako'.
console.log(0 || 'Ayako'); // Ayako

// In the case that all values are falsely, the expresion will return the final value in the expression to be printed, in this case '0'.
console.log(false || 0); // 0

// In the case of more than two values in the expression, the expression will return either the first truthy value it encounters, or the final value in the expression if there are no truthy values deteced.
console.log(0 || false || 'Michael'); // Michael
console.log(0 || false || '' || undefined || null); // null

// You can even use this syntax within the curly braces of a template literal etc.
console.log(`Short circuit evaluation: ${false || 'hello' || 202}`); // Short circuit evaluation: hello

// If we enable this line of code restaurants.numGuests will be initialized and the code below will assign the property this value of 23 instead of the default value 10.
// restaurant.numGuests = 23;

// This is one way we could set a default value in the case of a property on an object not existing, this is using more classic syntax with the ternary operator or an if/else statement.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// This is an easier way to do the same thing by using short-circuiting. The expression will put the first truthy value found to the variable. If restaurant.numGuests does not exist it will evaluate to false, so the default value 10 will be assigned instead.
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Unfortunately, both of these methods would not work if the numGuests had a value of 0, as 0 counts as a falsey value in JavaScript. We can work around this by offsetting the numbers, or passing in 0 as a string that can be converted to a number when needed etc.

// Using the AND operator &&
// When we use the AND operator for short-circuiting, it does the inverse of using the OR operator. The expression will return the first falsely value it encounters, or the final value if there are no falsey values. It also stops evaluating the expression as soon as it encounters a falsey value.
console.log('hello' && 'ayako'); // ayako
console.log(false && 'Hello'); // false
console.log('' && false && 'Hello'); // ''
console.log('hello' && 'France' && 1 && true && 0); // 0

// This function uses short-circuiting with the AND operator to assign the first falsey value it encounters to qualifyStatus. The bank will not give permission to anyone who doesn't have good credit, a clean criminal record, or own their own house. If all the values are truthy, the value true will be assigned to qualifyStatus and a loan approved.
function qualifyForLoan(goodCredit, cleanRecord, homeOwner) {
  const qualifyStatus = goodCredit && cleanRecord && homeOwner;
  console.log(`Applicant qualified for a loan?: ${qualifyStatus}`);
  return qualifyStatus;
}

let goodCredit = true; // This is bad if set to false
let cleanRecord = false; // This is bad if set to false
let homeOwner = true; // This is bad if set to false

// Right now, false will be returned because one of the arguments is a falsey value.
qualifyForLoan(goodCredit, cleanRecord, homeOwner);

// If we change all of the values to true, true will be returned as the last value in the short-circuit evaluation.
cleanRecord = true;
qualifyForLoan(goodCredit, cleanRecord, homeOwner);

// We could use an if statement to call a function on an object if it exists.
if (restaurant2.orderPizza) {
  restaurant2.orderPizza('mushrooms', 'spinach');
}

// We can do this in a simpler way using the AND operator and short-circuiting.

// In the code below, we can use a short-circuit evaluation, we use the function name on the left side of the expression, if it exists, the expression will move on to evaluate the right side, which is actually a call to this function. If the function does not exist, the expression will just return false and stop.
restaurant2.orderPizza &&
  restaurant2.orderPizza('olives', 'bacon', 'extra cheese');

// The function does not exist in 'restaurant', so the left side returns false and processing stops before an error can be encountered.
restaurant.orderPizza &&
  restaurant.orderPizza('olives', 'bacon', 'extra cheese');

// We cannot reverse the order of this by using the OR operator, as soon as the code encounters a function call it cannot complete it will crash.
// restaurant.orderPizza('peppers', 'chilli sauce', 'avacado') ||
//   console.log(`This restaurant doesn't serve pizza!`);

// The OR operator is useful for setting default values.
// The AND operator is useful for executing code in an expression if the first value/ values is/ are true.

// NOTES
// THE NULLISH COALESCING OPERATOR ??
// The nullish coalescing operator is denoted by '??', it is used to get around problems of 0's being evaluated to false vy default.

// In this case, if the variable/ property we are evaluating has an actual value of 0, this is a problem because it will evaluate to false as a 0 counts as a falsely value. The following code will assign the default value of 10, instead of 0 as it is defined.
restaurant.numGuests = false;
const guests = restaurant.numGuests || 10;
console.log(guests);

// We can use the nullish coalescing operator to get around this. The following code will give use the value of 0, which is what the variable is actually set to.
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// This will return ANY value that the variable or property contains, even if it is a 0, an empty string, or false. In the case of null and undefined, the default value will be applied instead. This is a way to test if something is absent a value completely, or has had a value assigned to it at some point. We say that this operator looks for 'nullish values', which are null and undefined, these will allow the expression to continue evaluating values if found.

// NOTES
// LOGICAL ASSIGNMENT OPERATORS
// There are three new logical assignment operators that were introduced in ES2021

const rest1 = {
  restName: 'Capri',
  numberOfGuests: 20,
};

const rest2 = {
  restName: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// Lets say we wanted to add a propery that not all objects have (adding it to the object only if it doesn't already have it)

// We are giving the numberOfGuest property the value of itself, if it already exists, or 10, if it doesn't exist. Remember that the OR operator looks for the first truthy value during short-circuit-evaluation.
// rest1.numberOfGuests = rest1.numberOfGuests || 10;
// rest2.numberOfGuests = rest2.numberOfGuests || 10;

console.log(rest1);
console.log(rest2);

// We can do the same with the owner property
rest1.owner = rest1.owner || 'Marcus LaRaBiatta';
rest2.owner = rest2.owner || 'Marcus LaRaBiatta';

console.log(rest1);
console.log(rest2);

// The OR assignment operator ||=
// The first logical assignment operator is the OR logical operator, which allows us to write the same thing in a more concise way.

// This code does exactly the same as the code above, but in a much shorter way. The OR assignment operator assigns a value to a variable if that variable is currently falsey.
rest1.numberOfGuests ||= 10;
rest2.numberOfGuests ||= 10;

console.log(rest1);
console.log(rest2);

// However, if we have the value of 0 in the variable, the left side of the operator will assign the value to that varibale as 0 counts as falsey.

// The nullish assignment operator ??=
// This is the nullish assigment operator, which allows us to assign a value to a variable if the variable has a nullish value like null or undefined.
rest1.numberOfGuests ??= 10;
rest2.numberOfGuests ??= 10;

console.log(rest1);
console.log(rest2);

// The logical AND operator &&=
// This operator allows us to replace the current value of a variable with another value. It assigns a value to a variable if it is currently truthy.

// We could replace the name of an owner with the value 'Anonymous'. remember that using the AND operator here returns the first falsey value or the last value.
rest2.owner = rest2.owner && 'Anonymous';
console.log(rest2);

// We could do the same thing in shorthand using the logical AND operator.
rest1.owner &&= 'Anonymous';
console.log(rest1);

// NOTES
// CHALLENGE 1
// Building a football betting application.

// We get data from a webservice about a football match, arrays of players and scores etc.

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// This is one way to create two arrays of players for each team.
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// This would be another way we could do this using an array destructing statement.
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// This is one way of creating two variables, one for the first element in an array, and one for the remaining elements.
// const gk = players1[0];
// const fieldPlayers = players1.slice(1);

// This is how we could do the same thing using the rest operator.
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// We could make all of these variables individually.
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// But a better way would be to use an object destructuring statement, we can change the variable x to have a name of draw as we go.
const { team1, x: draw, team2 } = game.odds;

// This is another way we could destructure to get the same result.
// const { odds: { team1, x: draw, team2 }} = game;

console.log(team1, draw, team2);

function printGoals(...players) {
  for (let i in players) {
    if (allPlayers.includes(players[i])) {
      console.log(`${players[i]} played in the match.`);
      let playerScoreCount = 0;
      if (game.scored.includes(players[i])) {
        for (let j in game.scored) {
          if (players[i] === game.scored[j]) {
            playerScoreCount++;
          }
        }
        let grammar = playerScoreCount === 1 ? '' : 's';
        console.log(`He scored ${playerScoreCount} goal${grammar}!`);
      } else {
        console.log(`He didn't score any goals!`);
      }
    } else {
      console.log(`${players[i]} didn't play in the match!`);
    }
  }
}

printGoals(
  'Neuer',
  'Martinez',
  'Kimmich',
  'Lewandowski',
  'Gnarby',
  'Cooperfield'
);

printGoals('George Crimby', 'Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored.slice(1));

// This is one way to print the likelihood of each team to win if they have lower odds. This is a challenge to not use if or the ternary operator.
const team1LikelyToWIn = team1 < team2 || false;
const team2LikelyToWIn = team1 > team2 || false;

console.log(
  `Is it likely that team 1 will win the match?: ${team1LikelyToWIn}`
);

console.log(
  `Is it likely that team 2 will win the match?: ${team2LikelyToWIn}`
);

// This is another way we could do this without using if or the ternary operator.
team1 < team2 && console.log(`Team 1 is the favourite to win!`);
team1 > team2 && console.log(`Team 2 is the favourite to win!`);

// NOTES
// THE FOR-OF LOOP
// There is an easier way to loop through an iterable than declaring a counter, a coindition, and incrementation. We can use the for-of loop.

// The first variable in the expression can be called anything, and if there is only one operation after the expression we do not need to enclose that in curly braces.
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of list) console.log(number);

let total = 0;
// If there is more than one expression after the expression we need to enclose them in curly braces.
for (const number of list) {
  console.log(number);
  total += number;
}
console.log(total);

// We can still use the continue and break keywords with the for-of loop, which cannot be used with other iteration methods.

// The for-of loop is not so great at getting the index value of an element. We have to call the '.entries()' method on the array or other iterable.

// Using an iterable with .entries will return a different array for each item in the iterable. This array will contain an index number, and the value of the item. By looking at the .entries() output, we can get both the index number and the value for each item.
for (const number of list.entries()) {
  const [indexValue, value] = number;
  console.log(`Index value: ${indexValue} Value: ${value}`);
}

// NOTES
// ENHANCED OBJECT LITERALS
// There are new ES6 features that make object literals more useful.

// This object is technically an object literal as we have written it literally within the curly braces syntax.

// Another added function from ES6 is the ability to compute variable and property names programmatically within square brackets. We can set the name to another piece of data, or even a calculation like 2 + 2.
const weekDays2 = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// This is sometimes extremely useful, such as when we need a variable to be generated in reaction to new data coming into the program.
const hours3 = {
  [weekDays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays2[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant3 = {
  restaurantName: 'Classico Italiano',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // This is the older, normal way to assign an object into another object, but this can be annoying because now both the original object and this property will have the same name. I don't know why the course didn't just suggest defining the property with a different name however.
  // hours3: hours3,
  // openingHours3: hours3;
  // But from ES6 you can now just do this automatically by writing the name of the object, assuming the code can find this via lookup, it will work and add it to the object under a property with name.
  hours3,

  // IN ES6, we no longer need to create a property and set it to a function expression, we can drop certain parts of the syntax, so this code below...
  orderUp: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Can become this, which is a little simpler. This is really down to personal taste, some people like the explictness of the keyword function, but others feel it is not needed.
  orderUp2(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  destructure() {
    return this.restaurantName2, this.openingHours2, this.categories2;
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'Address unknown',
  }) {
    console.log(`Your order details:`);
    console.log(`Starter: ${this.starterMenu2[starterIndex]}`);
    console.log(`Main: ${this.mainMenu2[mainIndex]}`);
    console.log(`Time: ${time}`);
    console.log(`Address: ${address}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    if (!mainIngredient) {
      console.log(
        'You need to tell us at least one ingredient for your pizza!'
      );
      return;
    }
    console.log(
      `Building you a pizza with ${mainIngredient} as the main ingredient...`
    );
    if (otherIngredients) {
      for (const i in otherIngredients) {
        console.log(`and ${otherIngredients[i]},`);
      }
    }
    console.log(`and that's it!`);
  },
};

console.log(JSON.stringify(restaurant3, null, 2));

// NOTES
// OPTIONAL CHAINING

// We could be looking for the value of a property that may or may not exist, so might end up creating statements that bring back undefined or an error.

// This code would bring back a value of undefined because 'mon' doesn't exist within the object hours3.
console.log(restaurant3.hours3.mon);
// But this could results in an error because it is trying to extract values from a property within 'mon' which doesn't exist.
// console.log(restaurant3.hours3.mon.open);

// Therefore, we want to first test if 'mon' exists before we try to extract any data from inside of it.

// This expression will log the contents of restaurant3.hours3.mon.open only if restaurant3,hours.mon exists in the first place. In this case it does not, so nothing is logged to the console.
if (restaurant3.hours3.mon) console.log(restaurant3.hours.mon.open);

// This expression will log the contents of restaurants3.hours3.Thursday.openn only if it exists in the first place. In this case it does, so the value of 12 is logged to the console.
if (restaurant3.hours3.Thursday) console.log(restaurant3.hours3.Thursday.open);

// Focusing on 'mon', the element that doesn't exist, we can check that it exists in another way using optional chaining. In some cases, hours might not exist either on a restaurant's object.

// We could do this to test if both of the properties exist before we try to get data from them but this can get extremely complicated fast if there are multiple levels of nesting to deal with.
if (restaurant3.hours3 && restaurant3.hours3.mon)
  console.log(restaurant3, hours3.mon);

// We can do it with optional chaining instead. The ? means it will only try to access the part after the ? if the part before the ? exists. If the element before the ? exists it will access the next part, if it doesn't exist then an undefined is returned. By exists, it means if it has a nullish value or not. If it has a nullish value, undefined will be returned.

// We can apply the optional chaining operator (?.) in multiple locations, so checks are performed in all locations specified, and undefined is returned in the case that anything doesn't exist.

// This statement will log undefined, as mon does not exist
console.log(restaurant3.hours3?.mon?.open);

// This statement will log 12 as hours3 and Thursday exist.
console.log(restaurant3.hours3?.Thursday?.open);

// This will also return undefined as although hours3 and Thursaday both exist, the property poop does not, so there is nothing to be returned. We cannot use the optional chaining operator at the end of the statement, but it doesn't matter as undefined is returned by a failed attempt to access and it won't raise an error.
console.log(restaurant3.hours3?.Thursday?.poop);

const days2 = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

console.log(`--------------------------------------------`);

// This code will use a for-of loop to iterate through the days2 array and then search for the opening time of the restaurant3 object on each day. If the hours3 object does not exist, it will return undefined, and if the specific day doesn't exist, it will return undefined. If open does not exist undefined will also be returned.

// We probably don't want to log undefined to the user so below are two different ways we could handle this a bit more professionally.
for (const day of days2) {
  console.log(day);
  // This is one way we could handle creating this variable, returning a string instead of undefined if it doesn't exist. We use the nullish coalsecing operator to allow a valid return if the value of the property is not nullish, i.e. 0, '', or false.
  const openingTime = restaurant3.hours3?.[day]?.open ?? '<No data found>';
  console.log(`On ${day} we open at ${openingTime}`);
}

console.log(`--------------------------------------------`);

// Here, undefined will be returned for each day, as the hours3 object does not exist in the restaurant2 object.
for (const day of days2) {
  console.log(day);
  const openingTime = restaurant2.hours3?.[day]?.open;
  // We could also change the console.log statement if undefined is returned. Because the expression tests specifically for undefined, it doesn't matter if something has a falsey value.
  if (openingTime === undefined) {
    console.log('No opening time was found in our database.');
  } else {
    console.log(`On ${day} we open at ${openingTime}`);
  }
}

// Use on methods
// We can use the also use the optional chaining operator on method calls, we place the operator after the name of the method and the argument parentheses go after this. In the examples below, a default string will be logged in the case that the method on the object does not exist.

// This code will successfully call the method and log the result as it exists on the object. The arguments in parentheses are only processed if the method exists and will be ignored if not.
console.log(restaurant3.orderUp2?.(0, 1) ?? 'Method does not exist');

// This code will log the default string as the method does not exist on the object, the arguments in the parenteses are ignored as the expression has already returned undefined at that point.
console.log(restaurant3.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Use on arrays
// We can even use this on arrays, to check if they are empty or not.

const users = [{ userName: 'Michael', email: 'mikemccann99@hotmail.co.jp' }];

console.log(users[0]?.userName ?? 'User array empty');

// This is how we would do this usually, but this is a lot more work that using the optional chaining operator and the nullish coalescing operator together.
if (users.length > 0) console.log(users[0].userName);
else console.log(`User array empty`);

// We could also test to see if other elements in the array existed or not. In this case it will log the default string.
console.log(users[1]?.userName ?? 'Array does not include that element');

// This version has two elements inside.
const users2 = [
  { userName: 'Michael', email: 'mikemccann99@hotmail.co.jp' },
  { userName: 'Ayako', email: 'ayachan.co.jp' },
];

// So this code will now log that elements userName as it exists
console.log(users2[1]?.userName ?? 'Array does not include that element');

// The optional chaining operator will very commonly be used in conjunction with the nullish coaslescing operator as this allows us to better handle situations where something doesn't exist.

// NOTES
// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
// We can use for-of loops to loop through iterables, we can a;so loop through objects, but in a different way. How we do this depends on what we want to loop over, the object's property names (or 'keys'), its values, or both together.

// Looping over object keys / property names
// We have to do this in an indirect way by creating an array, as we are not allowed to directly iterate over an object.

console.log(`--------------------------------------------`);

// The Object.keys() method puts all of the keys in the object into an array, we can then iterate over this array.
const properties = Object.keys(openingHours2);
console.log(properties);

// We could then use this array to do other things, like print how many days the restaurant is open on.
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Looping over property values

// Instead of using Object.keys, we instead use Object.values. We have to be a little more careful here, as keys could consist of nested levels of values instead of just one like keys.
const values = Object.values(openingHours2);
console.log(values);

// We can iterate through this array of values like with keys, and log the opening hours to the user.
for (const day of values) {
  let timeStr = `We open at ${day.open ?? `<time not found>`}, and close at ${
    day.close ?? `<time not found>`
  }`;
  console.log(timeStr);
}

// Looping over both keys and values
// We use .entries() to do this, as this method already creates an array containing both the key and the value of each data point.

// This makes an array that contains the index value, and the element from the object for each element.
const fullArray = Object.entries(openingHours2);
console.log(fullArray);

// We can destructure the array within the for-of loop's expression. This is easier that trying to index into the nested object as that can get very confusing.
for (const [key, { open, close }] of fullArray) {
  const totalStr = `On ${key} we open at ${open}, and close at ${close}`;
  console.log(totalStr);
}

// NOTES
// CHALLENGE 2
// Continuing with the football betting application

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// This is one way to create two arrays of players for each team.
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// This would be another way we could do this using an array destructing statement.
const [players1_2, players2_2] = game.players;

console.log(players1);
console.log(players2);

// This is one way of creating two variables, one for the first element in an array, and one for the remaining elements.
// const gk = players1[0];
// const fieldPlayers = players1.slice(1);

// This is how we could do the same thing using the rest operator.
const [gk2, ...fieldPlayers2] = players1;

console.log(gk2);
console.log(fieldPlayers2);

const allPlayers2 = [...players1_2, ...players2_2];
console.log(allPlayers);

const players1Final2 = [...players1_2, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final2);

// We could make all of these variables individually.
// const team1_2 = game.odds.team1;
// const draw2 = game.odds.x;
// const team2_2 = game.odds.team2;

// But a better way would be to use an object destructuring statement, we can change the variable x to have a name of draw as we go.
const { team1: team1_2, x: draw2, team2: team2_2 } = game2.odds;

// This is another way we could destructure to get the same result.
// const { odds: { team1, x: draw, team2 }} = game;

console.log(team1_2, draw2, team2_2);

function printGoals2(...players) {
  for (let i in players) {
    if (allPlayers2.includes(players[i])) {
      console.log(`${players[i]} played in the match.`);
      let playerScoreCount = 0;
      if (game2.scored.includes(players[i])) {
        for (let j in game.scored) {
          if (players[i] === game.scored[j]) {
            playerScoreCount++;
          }
        }
        let grammar = playerScoreCount === 1 ? '' : 's';
        console.log(`He scored ${playerScoreCount} goal${grammar}!`);
      } else {
        console.log(`He didn't score any goals!`);
      }
    } else {
      console.log(`${players[i]} didn't play in the match!`);
    }
  }
}

printGoals2(
  'Neuer',
  'Martinez',
  'Kimmich',
  'Lewandowski',
  'Gnarby',
  'Cooperfield'
);

printGoals2('George Crimby', 'Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals2(...game2.scored.slice(1));

// This is one way to print the likelihood of each team to win if they have lower odds. This is a challenge to not use if or the ternary operator.
const team1LikelyToWIn2 = team1_2 < team2_2 || false;
const team2LikelyToWIn2 = team1_2 > team2_2 || false;

console.log(
  `Is it likely that team 1 will win the match?: ${team1LikelyToWIn2}`
);

console.log(
  `Is it likely that team 2 will win the match?: ${team2LikelyToWIn2}`
);

// This is another way we could do this without using if or the ternary operator.
team1_2 < team2_2 && console.log(`Team 1 is the favourite to win!`);
team1_2 > team2_2 && console.log(`Team 2 is the favourite to win!`);

// NOTES
// Challenge 2 code:

// 1. Looping over the scored array in the game and logging which players scored goals in order.

// Creating an array containing all data in the game2.scored property.
const goalArray = Object.entries(game2.scored);

// Looping through the created array above and logging keys and values found within as part of a template literal.
for (const [key, value] of goalArray) {
  const goalMessage = `Goal ${key} was scored by ${value}! Get in son!`;
  console.log(goalMessage);
}

// 2. Calculating the average odds of the two teams winning and a draw.
const oddsArray = Object.values(game2.odds);
console.log(oddsArray);

// Building a total of all of the odds in the array.
let averageOdds = 0;
for (const odd in oddsArray) {
  averageOdds += oddsArray[odd];
}

// Apply division to the total odds based on the length of the oddsArray.
averageOdds /= oddsArray.length;
console.log(`The average odds are ${averageOdds}`);

// 3. Logging each of the odds nicely to the user.
console.log(`Odds of victory for ${game2.team1}: ${oddsArray[0]}`);
console.log(`Odds of a draw: ${oddsArray[1]}`);
console.log(`Odds of victory for ${game2.team2}: ${oddsArray[2]}`);

// We could also do this by iterating through the object and constructing a template literal that reacts to different data from the object. In this case the team names in the array have the same names as the teams listed in the object anyway, so we can use these names to access this data from the object.
for (const [team, odd] of Object.entries(game2.odds)) {
  let teamStr = `victory for ${game2[team]}`;
  if (team === 'x') {
    teamStr = 'a draw';
  }
  console.log(`Odds of ${teamStr}: ${odd}`);
}

// Bonus. Creating a new object that contains all unique goal scorers and the number of goals they scored.

// Creating an array composed of all data in game2.scored.
const scorers = game2.scored;
console.log(scorers);

const scorerObject = {};

// Iterate through the scorers array
for (let i = 0; i < scorers.length; i++) {
  const player = scorers[i];

  // If the player doesn't exist in the object, initialize their goal count to 0
  if (!scorerObject[player]) {
    scorerObject[player] = 0;
  }

  // Increment the player's goal count
  scorerObject[player]++;
}

console.log(`==========================`);
console.log(scorerObject);

const players = Object.keys(scorerObject);
const goals = Object.values(scorerObject);
console.log(players, goals);
console.log(`Today's goal scorers were:`);
for (let i = 0; i < players.length; i++) {
  console.log(`${players[i]}: ${goals[i]}`);
}

// NOTES
// SETS
// Sets are a datastructure added in ES6 along with maps. They already existed in many other programming languages, but not in JavaScript before.

// A set is a collection of unique values, there can not be any duplicates in a set, and this can be very useful in some situations, such as building the object of unique goalscorers in challenge 2 above.

console.log(`===========================================`);

// When we declare a new set we have to use the syntax new Set([csv go here]). This set declaration contains many values that are exactly the same, but only unique items will actually be added to the set.
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// We can see this by logging the set, in this case we see only {'Pasta', 'Pizza', 'Risotto'} All non-unique pieces of data have not been added.
console.log(orderSet);

// Sets can hold multiple different data types, but never a duplicate of something that already exists in the set. There are no key-value pairs in sets, just a load of csv values like an array. Like arrays, they are also iterable.

// However, unlike arrays, the order of elements in the set does not matter at all, it is irrelevant.

// Strings are also iterables, so we could pass a string into a set, and only unique letters would be passed in, this kind of functionality can be very useful.

console.log(new Set('Michael')); // M i c h a e l
console.log(new Set('Ayako')); // A y a k o
console.log(new Set('AAMMALLIA')); // A M L I -- only unique letters are added to the set.

// We can get the size of a set. We don't use .length to do this, but .size instead.
console.log(orderSet.size); // 3

// Using .length results in undefined, as length is based off of index number, and sets have no indexed elements as the order of elements inside a set is irrelevant.
console.log(orderSet.length); // undefined

// We can also check if a certain element contains a particular value. We use .has() to do this rather than .includes().
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Chocolate')); // false

// Trying to use .includes() on a set will result in an error, as the .includes() method is not included for sets, this is because it works by incrementing through index values, which sets don't have.
// console.log(orderSet.includes('Pizza'));

// We can add elements to a set using .add(), we do not use .push() as that adds something to the index of item.length + 1, and as sets don't use index numbers this would not work.

// Notice here that if we try to add the same value to the set more than once, it will only have an effect the first time, after that, the value is no longer unique and so will not be added.
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

// Logging the set will allow us to see that 'Garlic Bread' has only been added once.
console.log(orderSet);

// We can loop through a set because it is an iterable.
for (const order of orderSet) {
  console.log(order);
}

// The main usage of sets is to remove duplicate values from arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const jobSet = new Set(staff);
console.log(jobSet);
console.log(jobSet.size);

// The conversion to a set to an array is pretty easy, as both are iterable. We can create an array and then unpack a set into it using the spread operator.
const jobArray = [...jobSet];
console.log(jobArray);
// Of course, for an array, we can use .length() to let us see how big it is.
console.log(jobArray.length);

// We could also create a set directly inside a variable declaration from other data, like this.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// This would be a much another way of seeing the size of the set we create without having to do separate statement to log this.
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

const nameSet = new Set(' Michael Thomas McCann');
console.log(nameSet, nameSet.size);

// Sets are not intended to replace arrays, if we want to store a load of comma separated values, arrays are the best bet, but sets do have their uses to remove duplicate values and to see how many unique elements exist within some data/

// Sets are important, but arrays are much more important in day to day programming.

// NOTES
// MAPS: FUNDAMENTALS
// Maps are another datastructre added into JavaScript in ES6. This is much more useful that sets for storing and accessing data. Like dictionaries in Python, these are structures for matching keys to values. In maps, the key can have any type, and can even be something like another object, an array, or even another map, so very complex interactions can be acheived.

// Maps are initialized by using 'new Map()'
const rest = new Map();
// We can use the .set() method to add a new key-value pair to the map. In the parentheses we specify two arguments, the value of the key, which can hold any type, and the value which can also hold any type.
rest.set('restName', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

// We can see the contents of the map by logging it, we cannot use JSON.stringify to read the map as it cannot be coerced into JSON format.
console.log(rest);

// We can also add a key-value pair to the map and log the map at the same time like so.
console.log(rest.set(2, 'Lisbon, Portugal'));

// We can chain set methods together to add multiple things to the map at the same time. This works because each .set() returns the updated map after the new key-value pair has been added. This means that the next set in line can work with the updated map, so no errors are created.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  // We can even set Booleans are keys.
  .set(true, 'We are open!')
  .set(false, 'We are closed.');

console.log(rest);

// We can read data from a map by using the .get() method. The datatype is important when specifying the key name, if we used the value of 'true' as a string it would not work.
console.log(rest.get(true));

// In the code below we are doing something interesting, we want to return the value of either true or false from the map. We set up a condition where the first rest.get() statement evaluates to true or false by comparing the time variable to two other values in the map, using rest.get() statements to fetch those as well. The evaluation of this inner conditon will return true or false, setting this to the first .get() expression, acting as the name of the key-value pairs inside the map.
const time = 6; // We are closed.
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const time2 = 21; // We are open!
console.log(rest.get(time2 > rest.get('open') && time2 < rest.get('close')));

// The above expressions are pretty clever, but be careful not to overuse them as they are not very readable.

// We can check if a map contains a certain key using the .has() method. This will return a true or a false depending on if the map has that key or not.
console.log(rest.has('categories'));

// We can use the .delete() method to delete a key-value pair from a map using its key name.
rest.delete(2);
console.log(rest);

// If we try to delete something that doesn't exist in the map it is okay as nothing will happen at all.
rest.delete('Poop');
console.log(rest);

// If we were to do another .set() statement to an already created key name, it will overwrite the contents of the original with whatever we specify as the value here.
rest.set('categories', ['poop']);
console.log(rest);

// We can delete properties from objects using the delete operator, but this is very slow and not used so much anymore. This will be covered later in the course.

// We can remove all of the elements from a map by using the .clear() method. Be careful when doing this of course!
// rest.clear();
// console.log(rest, rest.size);

// Just to show that we can use things like arrays as a key name in a map.
rest.set([1, 2], 'Test');
console.log(rest);

// But to get the data based on that array, we would have to use a special .get() statement.

// This would not work, because this array and the one acting as the key are not the same object on the heap (in memeory).
console.log(rest.get[(1, 2)]); // undefined

// To make this work, we can create an array as a variable and then use that variable as the keyname in the map. Then we can use .get() with that variable which will have the correct value on the heap to act as the key.

const sameArr = [1, 2];
rest.set(sameArr, 'Test 2');
console.log(rest);

console.log(rest.get(sameArr)); // Test 2

// This can be very useful when manipulating DOM elements, as these are just a special type of object.

// This code will add a link to the specified HTML element to the map, if we inspect it in the console it will even highlight that element on the webpage. This can allow some compelx interactions between JavaScript and HTML that we can use to our advantage.
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// NOTES
// MAPS: ITERATION
//
