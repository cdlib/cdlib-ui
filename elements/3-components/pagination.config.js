const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 5; i++) {
  fakerData.push({
    pagination: {
      number: i + 1,
      isSelected: i == 2 // #3 gets selected
    }
  });
}

module.exports = {
  label: 'Pagination',
  context: {
    list: fakerData
  }
};
