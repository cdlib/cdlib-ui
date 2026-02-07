const pages = require('../../sample-data/pages.json')
const page = 37
const halfbox1Heading = pages[page].acf.side_by_side_box_1_heading
const halfbox1Content = pages[page].acf.side_by_side_box_1_content
const halfbox2Heading = pages[page].acf.side_by_side_box_2_heading
const halfbox2Content = pages[page].acf.side_by_side_box_2_content

module.exports = {
  label: 'Half Width Boxes',
  context: {
    halfbox1: {
      mainbox: {
        heading: {
          level: '2',
          text: halfbox1Heading
        },
        text: halfbox1Content
      }
    },
    halfbox2: {
      mainbox: {
        heading: {
          level: '2',
          text: halfbox2Heading
        },
        text: halfbox2Content
      }
    }
  },
  notes: "If one box is absent, the other one will stretch to fill the space."
}
