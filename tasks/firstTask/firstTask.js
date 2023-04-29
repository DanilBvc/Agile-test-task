const fs = require('fs');
const path = require('path')
let paths = path.join(__dirname)
const inputData = JSON.parse(fs.readFileSync(paths + '/inputFolder/example.json'));

function isTransformable(x, y) {
  if (x === y) {
    return true;
  }

  if (x > y) {
    return false;
  }


  while (y > x) {
    if (y % 2 === 0) {
      y /= 2;
    } else {
      y = (y + 1).toString();
    }
  }

  return x === y;
}

const result = isTransformable(inputData.x, inputData.y);

fs.writeFileSync(`${paths}/outputFolder/output.json`, JSON.stringify({ result }));
