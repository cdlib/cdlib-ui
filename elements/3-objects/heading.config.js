
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Headings',
  context: {
    text: faker.lorem.sentence()
  }
};
