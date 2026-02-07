const { faker } = require('@faker-js/faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    select: {
      option: {
        value: i + 1,
        label: faker.commerce.productName()
      }
    }
  });
}

module.exports = {
  label: 'Select',
  context: {
    label: {
      exists: true,
      for: 'select',
      text: 'Label'
    },
    select: {
      name: 'name',
      id: 'select',
      labelledby: 'labelledby',
      placeholder: {
        exists: true,
        label: 'Choose Your Option'
      },
    },
    selectoption: fakerData
  }
};
