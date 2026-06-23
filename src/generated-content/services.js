
const service1 = require('../../sample-data/menu-items/home-services-1.json')
const service2 = require('../../sample-data/menu-items/home-services-2.json')
const service3 = require('../../sample-data/menu-items/home-services-3.json')
const service4 = require('../../sample-data/menu-items/home-services-4.json')
const sampleMenu1 = [];
const sampleMenu2 = [];
const sampleMenu3 = [];
const sampleMenu4 = [];

const service = (data, menu) => {
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

service(service1, sampleMenu1)
service(service2, sampleMenu2)
service(service3, sampleMenu3)
service(service4, sampleMenu4)

module.exports = {
  services: {
    heading: {
      level: '2',
      text: 'CDL Services'
    }
  },
  service_1: {
    heading: {
      level: '3',
      text: 'Collect'
    },
    menu: sampleMenu1
  },
  service_2: {
    heading: {
      level: '3',
      text: 'Publish'
    },
    menu: sampleMenu2
  },
  service_3: {
    heading: {
      level: '3',
      text: 'Preserve'
    },
    menu: sampleMenu3
  },
  service_4: {
    heading: {
      level: '3',
      text: 'Access'
    },
    menu: sampleMenu4
  }
}
