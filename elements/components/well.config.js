const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Well',
  context: {
    heading: {
      level: 2,
      text: faker.commerce.productName()
    },
    well: {
      text: faker.lorem.sentences()
    },
    link: {
      text: faker.commerce.productName()
    }
  }
};
