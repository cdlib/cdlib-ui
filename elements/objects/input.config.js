
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Form Inputs',
  context: {
    text: faker.lorem.words()
  }
};
