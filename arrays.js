//Arrays in js
const demoArray = [10, 20, "Nam", "Indu"];
console.log(demoArray);
//literal syntax
const pNames = ["Realme", "lg", "samsung", "Mac"];
console.log(pNames);
//object syntax
let prices = new Array(20000, 30000, 15000, 50000);
//to get values
console.log(pNames[2]);

// forEach method
let prodNames = pNames.forEach((val) => {
  console.log(val);
});

//to add elements in arr(push,unshift,splice)
//push
pNames.push("onePlus");
console.log(pNames);
//unshift
pNames.unshift("Poco");
console.log(pNames);
//splice
pNames.splice(2, 0, "Moto", "Oppo");
console.log(pNames);

//to remove elements from arr(pop,shift,splice)
//pop
pNames.pop();
console.log(pNames);
//shift
pNames.shift();
console.log(pNames);
//splice
pNames.splice(4, 1);
console.log(pNames);

// delete pNames[1];
// console.log(pNames);

//sort
console.log(pNames.sort());
console.log(prices.sort());
//reverse
console.log(pNames.reverse());
console.log(prices.reverse());
//update
pNames[2] = "Moto pro";
console.log(pNames);
//concat
let pNames1 = ["Vivo", "Nokia"];
console.log(pNames.concat(pNames1));
//spread operator
let productNames = [...pNames, ...pNames1];
console.log(productNames);
//array advanced methods
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);
//map
let offerprice = prices.map((val) => {
  return val - 2000;
});
console.log(offerprice);
