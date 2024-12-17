'use strict';

// NOTES
// DESTRUCTURING ARRAYS
console.log('Assignments 2');

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// NOTES
// DESTRUCTURING OBJECTS

const { title, author, ISBN } = books[0];
const { keywords: tags } = books[0];
console.log(title, author, ISBN);
console.log(tags);

const { language = 'English', programmingLanguage = 'Unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'Unknown';
let bookAuthor = 'Unknown';

// Remember that to use destructuring to change the value of previoiusly defined variables, we have to enclose the whole destructuring statement in parentheses.
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// There are two ways we could destructure a deeply nested element. Either we put all of the complexity on the left side of our destructuring statement.
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// Or, we could put the complexity on the right side of the destructuring element, this is probably a lot cleaner and easier to read this way.
const { rating: bookRating2 } = books[0].thirdParty.goodreads;
console.log(bookRating2);

function printBookInfo(object) {
  const { title = 'Unknown', author = 'Unknown', year = 'Unknown' } = object;
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// NOTES
// THE SPREAD OPERATOR ...
let bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// This is one way we could use a function to spell a word. It is a little verbose.
function spellWord(word) {
  const letters = [...word];
  let outputString = '';
  for (const i in letters) {
    outputString += `${letters[i]} `;
  }
  console.log(outputString);
}

spellWord('apple');
spellWord('The quick brown fox jumps over the lazy dog');

// A much simpler refactoring of the same code
function spellWord2(word) {
  console.log(...word);
}

spellWord2('banana');
spellWord2('I like ice cream on the beachhead');

// NOTES
// THE REST PATTERN AND PARAMETERS ...
// Using the rest operator remember we should use square brackets as we are creating an array, and you don't need to use the variable names as they are in the object on the left side.
const [mainKeyword, ...rest] = books[0].keywords;
console.log(`Main: ${mainKeyword}, Others: ${rest}`);

// Apparently this should attach the publisher value to the first variable and then everything else to the restOfTheBook variable, however, even though the code is the same as in the course, it doesn't work, the value of restOfTheBook is [object Object], it doesn't contain any useful data at all. Not sure if this is intended end point for this assignment?
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(`Publisher: ${bookPublisher}, Others: ${restOfTheBook}`);

// This functions takes one argument for the book title and any number of arguments for the authors of the book.
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book '${title}' has ${authors.length} authors.`);
}

// We could specify the arguments manually, though this is time intensive.
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//Or, we could grab that data we need from the objects programmatically.
printBookAuthorsCount(books[0].title, ...books[0].author);
printBookAuthorsCount(books[1].title, ...books[1].author);
printBookAuthorsCount(books[2].title, ...books[2].author);
printBookAuthorsCount(books[3].title, ...books[3].author);
printBookAuthorsCount(books[4].title, ...books[4].author);
printBookAuthorsCount(books[5].title, ...books[5].author);
printBookAuthorsCount(books[6].title, ...books[6].author);
printBookAuthorsCount(books[7].title, ...books[7].author);

// We can further refactor this by iterating through the books in the books object.
for (let i = 0; i < books.length; i++) {
  printBookAuthorsCount(books[i].title, ...books[i].author);
}

// NOTES
// SHORT CIRCUITING || AND &&
// Added code to filter out false positives from 'JavaScript', we are only checking for 'Java' in this example.
function hasExamplesInJava(book) {
  return (
    (!book.programmingLanguage?.includes('JavaScript') &&
      book.programmingLanguage?.includes('Java')) ||
    'No data found'
  );
}

for (const i of books) {
  const result = hasExamplesInJava(i);
  console.log(`${i.title} -- contains Java: ${result}`);
}

function hasOnlineContent(books) {
  console.log('================================');
  for (const i of books) {
    i.onlineContent && console.log(`${i.title} provides online content`);
  }
}

// NOTES
// NULLISH COALESCING OPERATOR ??
function hasNoOnlineContent(books) {
  console.log('================================');
  for (const i of books) {
    i.onlineContent ??
      console.log(`${i.title} provides no data about its online content`);
  }
}

hasOnlineContent(books);
hasNoOnlineContent(books);

//NOTES
// FOR-OF LOOPS
function addEdition(books) {
  console.log('==============================');
  for (const i of books) {
    i.edition ||= 1;
    console.log(i.title, i.edition);
  }
}

addEdition(books);

// NOTES
// LOGICAL ASSIGNMENT OPERATORS ||=, &&=, ??=
function changeHighlight(books) {
  console.log('==============================');
  for (const i of books) {
    i.highlighted ||= true;
    i.highlighted &&= i.thirdParty.goodreads.rating > 4.2;
    console.log(
      `${i.title}, ${i.thirdParty.goodreads.rating} ${i.highlighted}`
    );
  }
}

changeHighlight(books);

let totalPageCount = 0;
for (const book in books) {
  totalPageCount += books[book].pages;
  console.log(totalPageCount);
}
console.log(`Final page count of all books is: ${totalPageCount}`);

// This code iterates through all of the books authors and adds them to a new array of all authors, if the author property of a book is a string, it just adds this string to the array, if the author property is an array, it iterates through the array and adds each individual author in it to the all authors array.
function accumulateAuthors(books) {
  console.log('======================');
  const allAuthors = [];
  for (const i of books) {
    const authors = i.author;
    if (typeof authors === 'string') {
      allAuthors.push(authors);
    } else {
      for (const j of authors) {
        allAuthors.push(j);
      }
    }
  }
  return allAuthors;
}

const allAuthors = accumulateAuthors(books);
console.log(allAuthors);

for (const author of allAuthors.entries()) {
  console.log(`${author[0] + 1}. ${author[1]}`);
}

// NOTES
// ENHANCED OBJECT LITERALS
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);
console.log(JSON.stringify(newBook));

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);

// NOTES
// OPTIONAL CHAINING
function getFirstKeyword(book) {
  const first = book.keywords?.[0];
  console.log(first);
}

for (const book of books) {
  getFirstKeyword(book);
}
getFirstKeyword(newBook2);

// NOTES
// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

let entries = [];

function collectKeys(book) {
  const thirdPartyObject = book.thirdParty.goodreads;
  console.log(thirdPartyObject);
  for (const key of Object.keys(thirdPartyObject)) {
    console.log(key);
    entries.push([key]);
  }
  console.log(entries);
}

// For one book.
collectKeys(books[0]);

// For all books.
// for (const book of books) {
//   collectKeys(book);
// }

function collectValues(book) {
  const thirdPartyObject = book.thirdParty.goodreads;
  for (const [key, value] of Object.entries(thirdPartyObject)) {
    console.log(key, value);
    for (const entry of entries) {
      if (entry[0] === key) {
        entry.push(value);
        break;
      }
    }
  }
  console.log(entries);
}

collectValues(books[0]);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// NOTES
// SETS

console.log('=====================================');

const allKeyWords = [];

function iterateAllKeywords(books) {
  for (const book of books) {
    allKeyWords.push(...book.keywords);
  }
  const uniqueKeywords = new Set(allKeyWords);
  return uniqueKeywords;
}

const uniqueKeywords = iterateAllKeywords(books);
console.log(uniqueKeywords);

uniqueKeywords.add('coding').add('science');

console.log(uniqueKeywords);

uniqueKeywords.delete('business');

console.log(uniqueKeywords);

const newKeyWordArr = [...uniqueKeywords];
console.log(newKeyWordArr);

// This is a clunkier way of deleting all values from a set
// for (const item of uniqueKeywords) {
//   uniqueKeywords.delete(item);
// }

// The simpler way is to use the .clear() method.
uniqueKeywords.clear();
console.log(uniqueKeywords);

// NOTES
// MAPS: FUNDAMENTALS
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(typeof bookMap, bookMap);

bookMap.set('pages', 464);
console.log(bookMap);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

const hasAuthor = bookMap.has('author');
if (hasAuthor) {
  console.log(`The author of the book is known. (${bookMap.get('author')})`);
}

// Slightly simpler syntax
if (bookMap.has('author')) console.log(`The author is known`);

// NOTES
// MAPS: ITERATION
console.log(books[0]);

const firstBook2 = new Map(Object.entries(books[0]));
console.log(firstBook2);

for (const [key, value] of firstBook2) {
  if (typeof value === 'number') {
    console.log(key);
  }
}

// NOTES
// WORKING WITH STRINGS - PART 1

const isbn = books[0].ISBN;
console.log(isbn);

console.log(isbn[6], isbn[4], isbn[9], isbn[8]);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

const indexOfChess = quote.indexOf('chess');
console.log(indexOfChess);

// Extracting the last word to print in a specific manner, kind of redundant.
const indexOfBoxing = quote.indexOf('boxing');
console.log(quote.slice(indexOfBoxing));

// Another way to do this top specifically extract the last word regardless of what it is.
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

function isContributor(book) {
  let authors;
  if (typeof book.author === 'string') {
    authors = [book.author];
    console.log(authors);
  } else {
    authors = [...book.author];
    console.log(authors);
  }
  for (const person of authors) {
    if (person.includes('(Contributor)')) {
      const contributor = true;
      console.log(
        `${person.slice(
          0,
          person.indexOf('(Contributor)') - 1
        )} is a contributor: ${contributor}`
      );
    }
  }
}

isContributor(books[1]);

for (const book of books) {
  isContributor(book);
}

function isContributor2(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

for (const person of [...books[1].author]) {
  console.log(person);
  console.log(isContributor2(person));
}

// NOTES
// WORKING WITH STRINGS - PART 2

function normalizeAuthorName(authorName) {
  authorName = authorName.trim();
  if (authorName.includes('(Contributor)')) {
    authorName = authorName.slice(0, authorName.indexOf('(Contributor)'));
  }
  let firstName = authorName.slice(0, authorName.indexOf(' '));
  let lastName = authorName.slice(authorName.indexOf(' ') + 1);
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  console.log(firstName, lastName);
}

normalizeAuthorName('Bob Sedgewick');
normalizeAuthorName('Michael McCann (Contributor)');

for (const book of books) {
  if (typeof book.author === 'string') {
    normalizeAuthorName(book.author);
  } else {
    for (const person of [...book.author]) {
      normalizeAuthorName(person);
    }
  }
}

console.log(books[1].title);
books[1].title = books[1].title.replace('Programs', 'Software');
console.log(books[1].title);

console.log('======================================');

function logBookTheme(title) {
  const lowerTitle = title.trim().toLowerCase();
  // console.log(lowerTitle);
  if (lowerTitle.startsWith('computer')) {
    console.log(title, '---');
    console.log(`This book is about computers`);
  }
  if (lowerTitle.includes('algorithms') && lowerTitle.includes('structures')) {
    console.log(title, '---');
    console.log(`This book is abvout algorithms and structures`);
  }
  if (
    (lowerTitle.endsWith('system') || lowerTitle.endsWith('systems')) &&
    !lowerTitle.includes('operating')
  ) {
    console.log(title, '---');
    console.log(
      `This book is about some systems, but definitely not about operating systems`
    );
  }
}

for (const book of books) {
  logBookTheme(book.title);
}

// NOTES
// WORKING WITH STRINGS - PART 3

console.log('======================================');

const bookCategories =
  'science;computing;computer science;algorithms;business;operating ststems;networking;electronics';

function logBookCategories(bookCategories) {
  const splitArr = [...bookCategories.split(';')];
  for (const item of splitArr) {
    console.log(item);
  }
}

logBookCategories(bookCategories);

function getKeywordsAsString(books) {
  let megaString = '';
  for (const book of books) {
    const keyWordString = [...book.keywords].join(';');
    console.log(keyWordString);
    megaString += keyWordString;
  }
  const megaSet = new Set(megaString.split(';'));
  console.log(megaSet);
  megaString = [...megaSet];
  console.log(megaString.join(';'));
}

getKeywordsAsString(books);

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
console.log(bookChapters);

function logBookChapters(bookChapters) {
  for (const [chapter, pages] of bookChapters) {
    console.log(`${chapter.padEnd(30, '_')} ${pages}`);
  }
}

logBookChapters(bookChapters);
