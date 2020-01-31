const faker = require('faker/locale/en');
const fakerData1 = [];
const fakerData2 = [];

for (var i = 0; i < 5; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData1.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

for (var i = 0; i < 7; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData2.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Quick Link',
  context: {
    quicklink1: {
      heading: {
        level: '2',
        text: faker.commerce.productName()
      }
    },
    quicklink2: {
      heading: {
        level: '2',
        text: faker.commerce.productName()
      }
    },
    list1: fakerData1,
    list2: fakerData2
  }
};
