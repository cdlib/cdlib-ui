const faker = require('faker/locale/en');
const fakerGlobalNav = [];
const fakerTopNav = [];

for (var i = 0; i < 3; i++) {
  fakerGlobalNav.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerTopNav.push({
    link: {
      text: faker.commerce.productName(),
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
