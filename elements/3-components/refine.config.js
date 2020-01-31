const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 5; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    text: faker.commerce.productName(),
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
    toggle: {
      closeButtonText: 'Close',
      openButtonText: 'Open',
    },
    list: fakerData,
  }
};
