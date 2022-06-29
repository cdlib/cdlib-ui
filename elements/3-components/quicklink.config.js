const homeQuicklinks1 = require('../../sample-data/menu-items/home-quicklinks-1.json')
const homeQuicklinks2 = require('../../sample-data/menu-items/home-quicklinks-2.json')
const sampleMenu1 = [];
const sampleMenu2 = [];

const homeQuicklinks = (data, menu) => {
  for (const i of data.keys()) {
    const title = data[i].title.rendered
    const url = data[i].url
  
    menu.push({
      link: {
        text: title,
        url: url
      }
    });
  }
}

homeQuicklinks(homeQuicklinks1, sampleMenu1)
homeQuicklinks(homeQuicklinks2, sampleMenu2)

module.exports = {
  collated: true,
  default: '1',
  label: 'Quick Link',
  context: {
    quicklink1: {
      heading: {
        level: '2',
        text: 'Resources For...'
      },
      menu: sampleMenu1
    },
    quicklink2: {
      heading: {
        level: '2',
        text: 'Go Directly To'
      },
      menu: sampleMenu2
    }
  }
};
