const faker = require('faker/locale/en');
const buttonList1 = [];
const buttonLabels1 = ['All results', 'Web pages', 'CDL Info posts', 'Documents'];
const buttonList2 = [];
const buttonLabels2 = ['Relevancy', 'Date'];

for (var i = 0; i < buttonLabels1.length; i++) {
  buttonList1.push({
    button: {
      text: buttonLabels1[i],
      number: i + 1
    }
  });
}

for (var i = 0; i < buttonLabels2.length; i++) {
  buttonList2.push({
    button: {
      text: buttonLabels2[i],
      number: i + 1
    }
  });
}

module.exports = {
  label: 'Filter Search',
  context: {
    buttonList1: buttonList1,
    buttonList2: buttonList2,
  }
};
