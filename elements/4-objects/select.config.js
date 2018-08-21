const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    select: {
      label: 'Option ' + (i + 1)
    }
  });
}

module.exports = {
  label: 'Select',
  context: {
    label1: {
      for: 'select1',
      text: 'Select Label'
    },
    option: fakerData
  }
};
