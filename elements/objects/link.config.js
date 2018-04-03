
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link: {
      text: 'standard link',
      linebreak: true
    }
  },
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        link: {
          text: 'underlined standard link on focus/hover'
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        link: {
          text: 'external link'
        }
      }
    },
    {
      name: '4', // link--4.hbs
      context: {
        link: {
          text: 'underlined external link on focus/hover'
        }
      }
    }
  ]
};
