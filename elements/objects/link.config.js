
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link: {
      text: 'Blue, underlined by default',
      linebreak: true
    }
  },
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        link: {
          text: 'Blue, underlined on focus/hover'
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        link: {
          text: 'Blue, underlined by default (external link)'
        }
      }
    },
    {
      name: '4', // link--4.hbs
      context: {
        link: {
          text: 'Blue, underlined on focus/hover (external link)'
        }
      }
    }
  ]
};
