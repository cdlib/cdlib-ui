
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Callout Box',
  context: {
    heading: {
      level: '1',
      text: 'Callout Box Heading'
    },
    text: faker.lorem.paragraph()
  }
};
