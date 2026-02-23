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
  select: {
    label: {
      for: 'select',
      text: 'Select Label'
    },
    name: 'name',
    id: 'select',
    labelledby: 'labelledby',
    placeholder: {
      label: 'Choose Your Option'
    },
    selectoption: fakerData
  }
}
