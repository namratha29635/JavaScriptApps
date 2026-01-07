//this keyword
const employInfo = {
  firstName: "Namratha",
  lastName: "Mallepula",
  empDetails: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(employInfo.empDetails());
