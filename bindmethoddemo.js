//bind method
const movieInfo = {
  heroname: "vijay",
  villianname: "devdas shetty",
  moviedetails: function () {
    return this.heroname + " " + this.villianname;
  },
};
const bahubali = {
  heroname: "prabhas",
  villianname: "rana",
};
const movieresult = movieInfo.moviedetails.bind(bahubali);
console.log(movieresult());
