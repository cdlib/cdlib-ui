
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    text: faker.lorem.words()
  }
};
