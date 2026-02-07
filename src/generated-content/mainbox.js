const pages = require('../../sample-data/pages.json')
const page = 37
const mainboxHeading = pages[page].acf.main_box_1_heading
const mainboxContent = pages[page].acf.main_box_1_content

module.exports = {
  collated: true,
  default: '1',
  label: 'Main Box',
  context: {
    mainbox: {
      heading: {
        level: '2',
        text: mainboxHeading
      },
      text: mainboxContent
    }
  }
}
