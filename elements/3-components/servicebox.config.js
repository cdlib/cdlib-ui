
const homeServices1 = require('../../sample-data/menu-items/home-services-1.json')
const homeServices2 = require('../../sample-data/menu-items/home-services-2.json')
const homeServices3 = require('../../sample-data/menu-items/home-services-3.json')
const homeServices4 = require('../../sample-data/menu-items/home-services-4.json')
const sampleMenu1 = [];
const sampleMenu2 = [];
const sampleMenu3 = [];
const sampleMenu4 = [];

const serviceBox = (data, menu) => {
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

serviceBox(homeServices1, sampleMenu1)
serviceBox(homeServices2, sampleMenu2)
serviceBox(homeServices3, sampleMenu3)
serviceBox(homeServices4, sampleMenu4)

module.exports = {
  label: 'Service Boxes',
  context: {
    service_box1: {
      heading: {
        level: '3',
        text: 'Collect'
      },
      menu: sampleMenu1
    },
    service_box2: {
      heading: {
        level: '3',
        text: 'Publish'
      },
      menu: sampleMenu2
    },
    service_box3: {
      heading: {
        level: '3',
        text: 'Preserve'
      },
      menu: sampleMenu3
    },
    service_box4: {
      heading: {
        level: '3',
        text: 'Access'
      },
      menu: sampleMenu4
    }
  }
};
