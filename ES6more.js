// Multi-line strings
let desc = `Top college in Vadlmudi
more recruitments
more activities`;
console.log(desc);

//string interpolation
let firstName = "Namratha";
let lastName = "Mallepula";
console.log(`${firstName} ${lastName}`);

//Array destructive
let pNames = ["Realme", "Lg", "Vivo"];
let [Brand1, Brand2, Brand3] = pNames;
console.log(Brand1);
console.log(Brand2);
console.log(Brand3);

//Object destructive
const movieInfo = {
  movie: "bahubali",
  director: "rajamouli",
  producer: "shobu",
};
let { movie, director, producer } = movieInfo;
console.log(movie);
console.log(director);
console.log(producer);
