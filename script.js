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

// This statement does not expect multiple values separated by a comma, so it doesn't accept the spread operator. We cannot use the spread operator to create a string literal.
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
