
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
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        heading: {
          level: '2'
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        heading: {
          level: '3'
        }
      }
    },
    {
      name: '4', // link--4.hbs
      context: {
        heading: {
          level: '4'
        }
      }
    },
    {
      name: '5', // link--5.hbs
      context: {
        heading: {
          level: '2',
          text: 'FAQ Heading: Astronomy, Indigenous Knowledge and Interpretation'
        }
      }
    }
  ]
};
