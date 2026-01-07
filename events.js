function buttonResult() {
  alert("Hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", buttonResult);

//clcik logic with arrow function
let btnvalue1 = document.getElementById("info");
btnvalue1.addEventListener("click", () => {
  alert("hello");
});
let btnvalue2 = document.getElementById("info");
btnvalue2.addEventListener("click", function () {
  alert("Welcome");
});
//mouse-over mouce-out logic
let h2value = document.getElementById("sample");
const mouseoverlogic = () => {
  h2value.style.color = "purple";
};
const mouseoutlogic = () => {
  h2value.style.color = "";
};
h2value.addEventListener("mouseover", mouseoverlogic);
h2value.addEventListener("mouseout", mouseoutlogic);
