//objects on js
const movieInfo = {
  movieName: "Akhanda2",
  heroName: "Balayya",
  directorName: "Boyapati",
};
//how to get
console.log(movieInfo.directorName);
console.log(movieInfo["heroName"]);
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}

//ES6+ new features
//object.keys
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
//to get only values
//object.values
Object.values(movieInfo).forEach((val) => {
  console.log(val);
});
//to get key and values
//object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + ":" + entry[1]);
});
//for-of
for (let [info, infovalue] of Object.entries(movieInfo)) {
  console.log(info + ":" + infovalue);
}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart object
const placedOrder = {
  products: [
    { pId: 1234, pName: "Drone", price: 10000 },
    { pId: 2345, pNAme: "Ac", price: 30000 },
  ],
  shippingAdress: {
    street: "vignan college",
    area: "vadlamudi",
    pincode: 522213,
  },
  userInfo: {
    uId: 1001,
    uName: "Namratha",
  },
};
console.log(placedOrder.userInfo.uName);
