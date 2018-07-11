const faker = require('faker/locale/en');
const fakerList1 = [];
const fakerList2 = [];
const topMenuItem = faker.commerce.productName()

for (var i = 0; i < 2; i++) {
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

module.exports = {
  label: 'Secondary Nav',
  context: {
    heading: {
      level: '2'
    },
    link1: true,
    link: {
      text: topMenuItem
    },
    secondarynav: {
      closeButtonText: 'Close',
      openButtonText: 'Open',
    },
    list1: fakerList1,
    list2: fakerList2,
  }
};
