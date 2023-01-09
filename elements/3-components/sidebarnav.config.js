const { faker } = require('@faker-js/faker/locale/en');
const fakerList1 = [];

for (var i = 0; i < 5; i++) {
  fakerList1.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Sidebar Nav',
  context: {
    heading: {
      level: '2',
      text: faker.commerce.productName()
    },
    list1: fakerList1,
  }
};
