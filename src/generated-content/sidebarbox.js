const pages = require('../../sample-data/pages.json')
const page = 51
const sidebarBoxHeading = pages[page].acf.sidebar_box_1_heading
const sidebarBoxContent = pages[page].acf.sidebar_box_1_content

module.exports = {
  sidebarbox: {
    heading: {
      level: '2',
      text: sidebarBoxHeading
    },
    content: sidebarBoxContent
  }
}
