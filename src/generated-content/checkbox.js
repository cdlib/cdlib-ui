const { faker } = require('@faker-js/faker/locale/en');
const fakerData = [];

for (var i = 0; i < 6; i++) {
  fakerData.push({
    checkbox: {
      label: faker.commerce.productName()
    }
  });
}

module.exports = {
  checkbox: fakerData
}
