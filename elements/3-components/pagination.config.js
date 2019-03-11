const faker = require('faker/locale/en');
const fakerData = [];
const minNum = 1;
const startNum = 11;
const endNum = 16;
const maxNum = 47;

// range function below inspired from: https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range

function* range(start, stop) {
  for (let i = start; 1 > 0 ? i < stop : i > stop; i++) {
    yield i;
  }
}

for (let i of range(startNum, endNum, 1)) {
  fakerData.push({
    pagination: {
      number: i,
      current: i == Math.floor((startNum + endNum) / 2) // nearest middle number within range gets selected
    }
  });
}

module.exports = {
  label: 'Pagination',
  context: {
    list: fakerData,
    minimumNumber: minNum,
    maximumNumber: maxNum
  }
};
