const sampleData = [];
const menuItems = require('../../sample-data/menu-items/about-cdl.json')
const menuItemsSkipFirst = menuItems.slice(1)
const firstTitle = menuItems[0].title.rendered
const firstUrl = menuItems[0].url

for (const i of menuItemsSkipFirst.keys()) {
  const title = menuItemsSkipFirst[i].title.rendered
  const url = menuItemsSkipFirst[i].url

  sampleData.push({
    link: {
      text: title,
      url: url
    }
  });
}

module.exports = {
  secondarynav: {
    heading: {
      level: '2',
      id: 'secondarynav-heading',
      link: {
        text: firstTitle,
        url: firstUrl
      }
    },
    hidden_link: {
      link: {
        text: firstTitle,
        url: firstUrl
      }
    },
    closeButtonText: 'Close Menu',
    openButtonText: 'Open Menu',
    list: sampleData
  }
}
