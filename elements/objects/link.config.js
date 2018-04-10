
const faker = require('faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Links',
  context: {
    link: {
      text: 'link style 1, unlinked on focus/hover',
      linebreak: true
    }
  },
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        link: {
          text: 'link style 1, linked on focus/hover'
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        link: {
          text: 'external link style 1, linked on focus/hover'
        }
      }
    },
    {
      name: '4', // link--4.hbs
      context: {
        link: {
          text: 'external link style 1, unlinked on focus/hover'
        }
      }
    }
  ]
};
