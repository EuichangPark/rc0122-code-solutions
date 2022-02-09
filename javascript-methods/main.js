var number1 = 3;
var number2 = 4;
var number3 = 5;

var maximumValue = Math.max(number1, number2, number3);
console.log('value of maximumValue: ', maximumValue);

var heroes = ['Iron man', 'Captain America', 'Vision', 'Black Widow'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('the value of randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter1',
    author: 'J. K. Rowling'
  },
  {
    title: 'Harry Potter2',
    author: 'J.K. Rowling'
  },
  {
    title: 'Harry Potter3',
    author: 'J.K. Rowling'
  }
];

var lastBook = library.pop();
console.log('the value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('the value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Euichang Park';
var firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName: ', sayMyName);
