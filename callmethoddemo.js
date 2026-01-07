//call method
const productInfo = {
  pdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const product = {
  pid: 1001,
  pname: "Realme",
};
console.log(productInfo.pdetails.call(product, 4, 30000));
