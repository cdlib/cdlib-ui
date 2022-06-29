const utilityNav = require('../../sample-data/menu-items/header-utility-nav.json')
const navList = [];

for (const i of utilityNav.keys()) {
  const title = utilityNav[i].title.rendered
  const url = utilityNav[i].url

  navList.push({
    link: {
      text: title,
      url: url
    }
  });
}

module.exports = {
  label: 'Utility Nav',
  context: {
    list: navList,
  }
};
