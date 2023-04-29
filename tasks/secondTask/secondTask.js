const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'inputFolder', 'example.json');
const outputFilePath = path.join(__dirname, 'outputFolder', 'output.json');

if (fs.existsSync(outputFilePath)) {
  fs.unlinkSync(outputFilePath);
}

const input = JSON.parse(fs.readFileSync(inputFilePath));
const n = input.n;
const arr = input.arr.slice();

let pointer = arr[0];
let runner = arr[0];

do {
  pointer = arr[pointer];
  runner = arr[arr[runner]];
} while (pointer !== runner);

pointer = arr[0];
while (pointer !== runner) {
  pointer = arr[pointer];
  runner = arr[runner];
}

const output = { repeatedElement: pointer };
fs.writeFileSync(outputFilePath, JSON.stringify(output));
