//without closure
//global variable
let counter = 1;
//local variable
const counterResult = () => {
  let counter = 0;
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
