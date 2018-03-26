
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link1: {
      text: 'standard link'
    },
    link2: {
      text: 'external link'
    },
    link3: {
      text: 'navigation link'
    }
  }
};
