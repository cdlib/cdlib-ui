const faker = require('faker/locale/en');
const fakerData1 = [];
const fakerData2 = [];
const fakerData3 = [];

for (var i = 0; i < 5; i++) {
  fakerData1.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerData2.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerData3.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Categories',
  context: {
    list1: fakerData1,
    list2: fakerData2,
    list3: fakerData3
  }
};
