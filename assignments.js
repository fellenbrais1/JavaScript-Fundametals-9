'use strict';

console.log(`Assignments 1`);

const country = 'Japan';
const continent = 'Asia';
let population = 124_500_000;
const isIsland = true;
const language = 'Japanese';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

population -= 1_000_000;

console.log(population);

const halfPopulation = population / 2;

console.log(halfPopulation);

population += 1;
console.log(population);

const finlandPopulation = 6_000_000;

if (population > finlandPopulation) {
  console.log(
    `${country} has a bigger population than Finland ${population}/${finlandPopulation}`
  );
}

const averagePopulation = 33_000_000;

const difference = checkDifference(population, averagePopulation);

if (population > averagePopulation) {
  console.log(
    `${country} has a bigger populaton that the world average! ${population}/${averagePopulation}`
  );
  console.log(`${country}'s population is ${difference} above average.`);
} else if (population == averagePopulation) {
  console.log(`${country} has the exact average population of 33,000,000!`);
} else {
  console.log(
    `${country} has a lower than average population! ${population}/${averagePopulation}`
  );
  console.log(
    `${country}'s population is ${difference - difference * 2} below average.`
  );
}

// String literal construction.
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

console.log(description);

function checkDifference(population, averagePopulation) {
  return population - averagePopulation;
}

console.log('9' - '5'); // number 4 - minuses allow strings to be processed as numbers
console.log('19' - '13' + '17'); // string 617 - subtraction works as wwe would expect, but + acts as a concatenator between strings
console.log('19' - '13' + 17); // number 23 - subtraction of strings and addition of a number work as we would expect
console.log('123' < 57); // false - strings are not treated as numbers ofr the purposes of comparison operators
console.log(5 + 6 + '4' + 9 - 4 - 2); // number 1143 - the + of a string is treated as a concatenator, the numbers after this concatenation are added onto the end, giving us a very strange result

// prompt asks the user to enter data into the browser.
// let numNeighbours = prompt(
//   `How many neighbour countries does ${country} have?`
// );

let numNeighbours = 3;

// Using the type equality operator.
if (numNeighbours === '1') {
  console.log(`${country} has only one border with another country!`);
} else if (numNeighbours > 1) {
  console.log(`${country} has ${numNeighbours} borders with other countries!`);
} else {
  console.log(`${country} has no borders with other countries!`);
}

// Combined conditions in a statement with logical operators.
if (language === 'English' && population < 50_000_000 && isIsland === false) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria!`);
}

// Switch/Case statement, the last case has to be 'default' unless all possible cases can be covered by cases stated.
switch (language) {
  case 'Chinese': {
    console.log(`MOST number of native speakers!`);
    break;
  }
  case 'Spanish': {
    console.log('2nd place in number of native speakers!');
    break;
  }
  case 'English': {
    console.log(`3rd place in number of native speakers!`);
    break;
  }
  case 'Hindi': {
    console.log(`4th place in number of native speakers!`);
    break;
  }
  case 'Arabic': {
    console.log(`5th place in number of native speakers!`);
    break;
  }
  default: {
    console.log(`Great language too :D`);
    break;
  }
}

// We could compute something with the ternary operator before and then use it later.
let grammar = population > averagePopulation ? 'above' : 'below';
console.log(`${country}'s population is ${grammar} average.`);

// Or we could compute something with the ternary operator in line.
console.log(
  `${country}'s population is ${
    population > averagePopulation ? 'above' : 'below'
  } average.`
);

// Function declaration to create a string literal
function describeCountry(country, population, captialCity) {
  return `${country} has ${population} million people and its capital city is ${captialCity}.`;
}

// Calling and logging this function result.
const descEngland = describeCountry('England', 57.6, 'London');
const descFrance = describeCountry('France', 68.17, 'Paris');
const descChina = describeCountry('China', '1,411', 'Beijing');

console.log(descEngland);
console.log(descFrance);
console.log(descChina);

// Define variable for later use.
let worldPopulation = 8025;

// Function declaration version.
function percentageOfWorld1(country, countryPopulation) {
  const percentagePopulation = (countryPopulation / worldPopulation) * 100;
  const roundedPercentage = percentagePopulation.toFixed(3);
  return `${country}'s population as a percentage of the world's: ${roundedPercentage}%`;
}

const percEngland = percentageOfWorld1('England', 57.6);
const percFrance = percentageOfWorld1('France', 68.17);
const percChina = percentageOfWorld1('China', 1411);
const percAndorra = percentageOfWorld1('Andorra', 0.080088);

console.log(percEngland);
console.log(percFrance);
console.log(percChina);
console.log(percAndorra);

// Function expression version.
const percentageOfWorld2 = function (country, countryPopulation) {
  const percentagePopulation = (countryPopulation / worldPopulation) * 100;
  const roundedPercentage = percentagePopulation.toFixed(3);
  return `${country}'s population as a percentage of the world's: ${roundedPercentage}%`;
};

const percRussia = percentageOfWorld2('Russia', 143.8);
const percIndia = percentageOfWorld2('India', 1429);
const percWales = percentageOfWorld2('Wales', 3.16);

console.log(percRussia);
console.log(percIndia);
console.log(percWales);

// Arrow function version.
const percentageOfWorld3 = (country, countryPopulation) => {
  const percentagePopulation = (countryPopulation / worldPopulation) * 100;
  const roundedPercentage = percentagePopulation.toFixed(3);
  return `${country}'s population as a percentage of the world's: ${roundedPercentage}%`;
};

const percGreece = percentageOfWorld3('Greece', 10.36);
console.log(percGreece);

// Getting functiomns to call other functions.
function returnPopulationPercentage(countryPopulation) {
  const percentagePopulation = (countryPopulation / worldPopulation) * 100;
  const roundedPercentage = percentagePopulation.toFixed(3);
  return roundedPercentage;
}

function describePopulation(country, countryPopulation) {
  const percentage = returnPopulationPercentage(countryPopulation);
  return `${country} has ${countryPopulation} million people, which is about ${percentage}% of the world.`;
}

const populationResultScotland = describePopulation('Scotland', 5.49);
const populationResultIreland = describePopulation('Ireland', 5.262);
const populationResultGermany = describePopulation('Germany', 84.48);

console.log(populationResultScotland);
console.log(populationResultIreland);
console.log(populationResultGermany);

const populations = [
  ['Scotland', 5.49],
  ['Ireland', 5.262],
  ['Germany', 84.48],
  ['Greece', 10.36],
];

let percentages = [];

// Iterates through the array and calculates the percentage of world population.
populations.forEach(element => {
  const result = returnPopulationPercentage(element[1]);
  console.log(`${element[0]} has a percentage population of ${result}%`);
  percentages.push(result);
});

// Tests to see if the array is 4 elements long.
const logic = populations.length === 4 ? true : false;
console.log(logic);

console.log(percentages);

let neighbouringCountries = [
  'Northern Ireland',
  'Southern Ireland',
  'Scotland',
  'Wales',
];

console.log(neighbouringCountries);

// Use .push() to add an element to the end of an array.
neighbouringCountries.push('Utopia');
console.log(neighbouringCountries);

// We can use .pop() to remove the last element in an array.
// neighbouringCountries.pop();

// To have more control over what we remove, we can find the index of a named element in the array and then use .splice() to remove the element at that index. .splice() takes two arguments, the index to start deleting from in the array and a length, a legnth of 1 will delete only the starting index element.
const indexToRemove = neighbouringCountries.indexOf('Utopia');
neighbouringCountries.splice(indexToRemove, 1);

console.log(neighbouringCountries);

if (neighbouringCountries.includes('Germany')) {
  console.log(`This country could be in central Europe.`);
} else {
  console.log('This country is probably not in central Europe.');
}

// We can use a similar syntax to above to change a specific element in an array.
const indexToChange = neighbouringCountries.indexOf('Scotland');

neighbouringCountries[indexToChange] = 'New MichaelLand';
console.log(neighbouringCountries);

const myCountry = {
  country: 'England',
  capital: 'London',
  language: 'English',
  population: 57.6,
  neighbours: ['Northern Ireland', 'Southern Ireland', 'Scotland', 'Wales'],
  describe: function () {
    const description = `${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`;
    this.description = description;
    return description;
  },
  isIsland: function () {
    return this.neighbours === 0 ? (this.island = true) : (this.island = false);
  },
};

// We can print an object to terminal in a readable JSON format like this. The null means that no replacer function will be used, and the number is the number of spaces each level is indented.
console.log(JSON.stringify(myCountry, null, 2));
console.log(myCountry.describe());
console.log(myCountry.isIsland());

// We can change an inner value with bracket notation, but we should use the name of the property, not its index value to do so.
myCountry['population'] += 2;
console.log(JSON.stringify(myCountry, null, 2));

// Using dot notation to change something is actually a little easier to do.
myCountry.population += 2;
console.log(JSON.stringify(myCountry, null, 2));

// let i = 1;
for (let i = 1; i < 51; i++) {
  console.log(`Voter ${i} is currently voting...`);
  setTimeout(() => {}, 1000);
}

let populations2 = [];

for (population in populations) {
  const percentagePopulation = returnPopulationPercentage(population);
  populations2.push(percentagePopulation);
  console.log(populations2);
}

const testArray = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

console.log(testArray);

let listOfNeighbours = [];

for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
  for (let j = 0; j < testArray[i].length; j++) {
    console.log(testArray[i][j]);
    listOfNeighbours.push(testArray[i][j]);
  }
}

console.log(listOfNeighbours);

let stringNeighbours = '';

for (let i = 0; i < listOfNeighbours.length; i++) {
  stringNeighbours += listOfNeighbours[i];
  if (i < listOfNeighbours.length - 1) {
    stringNeighbours += ', ';
  }
  console.log(stringNeighbours);
}

console.log(stringNeighbours);

const populations3 = [5.49, 5.262, 84.48, 10.36];

let populations4 = [];

let counter = 0;
while (counter < populations3.length) {
  const percentagePopulation = returnPopulationPercentage(
    populations3[counter]
  );
  console.log(percentagePopulation);
  populations4.push(percentagePopulation);
  counter++;
}

console.log(populations4);
