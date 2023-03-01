const app = require("./app");
const fs = require("fs");

var x = 20;
var y = 30;

const z = [2, 3, 4, 5, 6, 7];

console.log(
  z.filter((item) => {
    return item === 2;
  })
);

console.log(`Sum of x and y is ${x + y}`);

console.log(`Value of app is ${app.x + app.y}`);

fs.writeFileSync("node.js", "console.log()");
