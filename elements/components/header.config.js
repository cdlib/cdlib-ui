const fakerGlobalNav = [];
const fakerTopNav = [];
const navGlobal = ['Staff Directory', 'Contact CDL', 'Report a Problem', 'System Status'];
const navTop = ['About CDL', 'Services & Projects', 'Resources for...', 'Committees & Groups', 'News & Groups'];

for (var i = 0; i < 4; i++) {
  fakerGlobalNav.push({
    link: {
      text: navGlobal[i]
    }
  });
}

for (var i = 0; i < 5; i++) {
  fakerTopNav.push({
    link: {
      text: navTop[i]
    }
  });
}

module.exports = {
  label: 'Global Header',
  context: {
    // Search component:
    label1: {
      text: 'Search the California Digital Library'
    },
    input1: {
      placeholder: ''
    },
    button4: {
      text: 'Search'
    },
    // Global and top navs:
    list1: fakerGlobalNav,
    list2: fakerTopNav
  }
};
