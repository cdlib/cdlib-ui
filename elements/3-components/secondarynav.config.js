const faker = require('faker/locale/en');
const fakerList1 = [];
const fakerList2 = [];
const fakerList3 = [];
const fakerList4 = [];
const topMenuItem = faker.commerce.productName()

for (var i = 0; i < 3; i++) {
  fakerList1.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerList2.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerList3.push({
    link: {
      text: faker.commerce.productName(),
      url: 'https://sp.ucop.edu/document.html'
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerList4.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Secondary Nav',
  context: {
    heading: {
      level: '2',
      id: 'secondarynav-heading'
    },
    link1: true,
    link: {
      text: topMenuItem
    },
    secondarynav: {
      closeButtonText: 'Close Menu',
      openButtonText: 'Open Menu',
    },
    list1: fakerList1,
    list2: fakerList2,
    list3: fakerList3,
    list4: fakerList4
  }
};
