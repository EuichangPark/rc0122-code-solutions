/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  let result;
  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isEven(number) {
  let result;
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function startsWithJ(string) {
  let result;
  if (string.charAt(0) === 'J') {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrink(person) {
  let result;
  if (person.age < 21) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

function isOldEnoughToDrive(person) {
  let result;
  if (person.age > 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  let result;
  if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else if (pH === 7) {
    result = 'neutral';
  } else if (pH > 7 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  let result;
  if (name === 'yakko' || name === 'wakko') {
    result = "We're the warner brothers!";
  } else if (name === 'dot') {
    result = "I'm cute~";
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
