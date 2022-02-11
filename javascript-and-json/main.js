var books = [{
  isbn: '34ecfefefef',
  title: 'The Lord of the Ring',
  author: 'J.R. Tolkien'
},
{
  isbn: '233456677878',
  title: 'The Hobbit',
  author: 'J.R. Tolkien'
},
{
  isbn: '344565656',
  title: 'Harry Potter',
  author: 'J. K. Rowling'
}];

console.log('books[0]: ', typeof books[0]);
console.log('books[1]: ', typeof books[1]);
console.log('books[2]: ', typeof books[2]);

var booksString1 = JSON.stringify(books[0]);
var booksString2 = JSON.stringify(books[1]);
var booksString3 = JSON.stringify(books[2]);

console.log('bookString1', booksString1, typeof booksString1);
console.log('bookString2', booksString2, typeof booksString2);
console.log('bookString3', booksString3, typeof booksString3);

var student = JSON.stringify({ id: 23454545, name: 'Kent Park' });
console.log('student: ', student, typeof student);

var object = JSON.parse(student);
console.log('object: ', object, typeof object);
