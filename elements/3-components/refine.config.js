const faker = require('faker/locale/en');
const fakerList1 = [];

for (var i = 0; i < 5; i++) {
  fakerList1.push({
    link: {
      text: faker.commerce.productName()
    },
    number: faker.random.number(200)
  });
}

module.exports = {
  label: 'Refine Search',
  context: {
    heading: {
      level: '2',
      text: 'Narrow Your Results'
    },
    list1: fakerList1,
  }
};
