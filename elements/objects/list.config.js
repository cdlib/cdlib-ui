
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Lists',
  context: {
    text: faker.lorem.words()
  }
};
