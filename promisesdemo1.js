// Promises demo
const generateScore = new Promise((resolve, reject) => {
  let score = Math.floor(Math.random() * 10);
  if (score > 5) {
    resolve("High score" + score);
  } else {
    reject("Low score" + score);
  }
});
// to call promise
generateScore
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
