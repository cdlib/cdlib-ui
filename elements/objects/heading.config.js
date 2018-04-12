
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Headings',
  context: {
    heading: {
      level: '1',
      text: 'Astronomy, Indigenous Knowledge and Interpretation: Advancing studies of Cultural Astronomy in South Africa'
    },
    // Linked headings using Link objects:
    link1: false,
    link2: false,
    link: {
      text: 'Linked heading text'
    }
  },
};
