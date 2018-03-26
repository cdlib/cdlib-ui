
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Callout Box',
  context: {
    heading3: {
      text: 'Callout Box Heading'
    },
    text: faker.lorem.paragraph()
  }
};
