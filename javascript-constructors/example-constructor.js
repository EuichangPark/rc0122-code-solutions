function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', ExampleConstructor.prototype);

var myConstructor = new ExampleConstructor();
console.log('value of myConstructor:', myConstructor);

var constructorCheck = myConstructor instanceof ExampleConstructor;
console.log('value of constructorCheck:', constructorCheck);
