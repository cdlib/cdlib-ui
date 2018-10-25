const faker = require('faker/locale/en');

module.exports = {
  label: 'Main Heading',
  context: {
    heading: {
      level: '1',
      text: faker.commerce.productName()
    },
    tagline: {
      text: faker.lorem.sentence()
    }
  }
};
