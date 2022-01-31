var student = {
  firstName: 'Euichang',
  lastName: 'Park',
  age: 29
};

console.log('value of student: ', student);

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
console.log('value of student(livesInIrvine): ', student);

student.previousOccupation = 'manager';
console.log('value of student(preOccupation): ', student);

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Tucson',
  year: 2022
};
console.log('value of vehicle: ', vehicle);

vehicle['color'] = 'black';
console.log('value of vehicle(color): ', vehicle);

vehicle['isConvertible'] = false;
console.log('value of vehicle(inConvertible): ', vehicle);

console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'momo',
  type: 'toy poodle'
};

delete pet.name;
delete pet.type;

console.log('the value of pet: ', pet);
