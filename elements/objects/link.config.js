
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
      text: 'underlined standard link on focus/hover'
    },
    link3: {
      text: 'external link'
    },
    link4: {
      text: 'underlined external link on focus/hover'
    },
    linebreak: true
  }
};
