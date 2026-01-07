//Functions in js
function showMessage() {
  console.log("Welcome to JS functions");
}
showMessage();

//Function with parameters
function sumNums(a, b) {
  console.log("sum is:" + (a + b));
}
sumNums(10, 20);

//Function with return value
function mulNums(i, j) {
  return i * j;
}
let result = mulNums(2, 3);
console.log("Product is:" + result);

// New function syntax in ES-6
// Arrow function
const arrowDemo = () => {
  console.log("Arrow function demo");
};
arrowDemo();

// Arrow function with parameters
const addNums = (a, b) => {
  console.log("Addition is:" + (a + b));
};
addNums(16, 29);

// In a simple way
const addNums1 = (a, b) => a + b;
console.log(addNums1(16, 29));

//Arrow function with return a value
const mulNums1 = (a, b) => a * b;
let res = mulNums1(4, 8);
console.log("Product is:" + res);

//rest parameters
const printValues = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
printValues(10, 20, 30, 40, 50);

//Default parameters
const addNumbers = (a = 10, b) => {
  console.log("Addition is:" + (a + b));
};
addNumbers(40);
