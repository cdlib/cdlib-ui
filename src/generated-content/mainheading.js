const pages = require('../../sample-data/pages.json')
const page = 37
const pageHeading = pages[page].title.rendered
const pageTagline = pages[page].acf.tagline

module.exports = {
  label: 'Main Heading',
  context: {
    heading: {
      level: '1',
      text: pageHeading
    },
    tagline: {
      text: pageTagline
    }
  }
};
