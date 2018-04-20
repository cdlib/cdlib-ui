const faker = require('faker/locale/en');
const fakerHeaderList1 = [];
const fakerHeaderList2 = [];
const fakerHeaderList3 = [];

for (var i = 0; i < 5; i++) {
  fakerHeaderList1.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerHeaderList2.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

for (var i = 0; i < 3; i++) {
  fakerHeaderList3.push({
    link: {
      text: faker.commerce.productName(),
    }
  });
}

module.exports = {
  label: 'Header Nav',
  context: {
    list1: fakerHeaderList1,
    list2: fakerHeaderList2,
    list3: fakerHeaderList3
  }
};
