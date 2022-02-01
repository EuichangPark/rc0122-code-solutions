function convertMinutesToSeconds(minutes) {
  console.log('value of totalMinutes: ', minutes * 60);
}
convertMinutesToSeconds(5);

function greet(name) {
  console.log('greetings: ', '"Hey, ' + name + '"');
}
greet('Beavis');

function getArea(width, height) {
  console.log('value of getArea: ', width * height);
}
getArea(17, 42);

function getFirstName(person) {
  console.log('value of the firstName: ', person.firstName);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  console.log('the value of getLastElement: ', array[array.length - 1]);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
