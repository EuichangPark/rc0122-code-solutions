function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('value of totalMinutes: ', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}
console.log('value of greet: ', greet('Beavis'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
getArea(17, 42);
console.log('value of getArea: ', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('value of the firstName: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
console.log('the value of getLastElement: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
