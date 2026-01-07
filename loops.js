// Loops in js
// For
for (i = 1; i <= 10; i++) {
  console.log("i value is:" + i);
}

//while
let j = 1;
while (j <= 10) {
  console.log("j value is:" + j);
  j++;
}

//do while
let k = 1;
do {
  console.log("k value is:" + k);
  k++;
} while (k <= 10);

//loops in advanced js(ES-6)
//for-in and for-of
//these loops are used to get data from iterables(arrays,objects,strings)
let pnames = ["realme", "samsung", "iPhone", "iqoo"];
for (let names of pnames) {
  console.log(names);
}

let employinfo = {
  eid: 1001,
  ename: "Namratha",
  esal: 80000,
};

for (let info in employinfo) {
  console.log(employinfo[info]);
}

let clgName = "Vignan";
for (let char of clgName) {
  console.log(char);
}

let college = "VIGNAN";
for (let char in college) {
  console.log(college[char]);
}
