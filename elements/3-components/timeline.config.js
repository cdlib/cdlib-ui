const faker = require('faker/locale/en');
const fakerData1 = [];
const fakerData2 = [];

for (var i = 0; i < 22; i++) {
  fakerData1.push({
    timeline: {
      year: 1997 + i
    }
  });
}

for (var i = 0; i < 2; i++) {
  fakerData2.push({
    link: {
      text: faker.lorem.sentence()
    }
  });
}

module.exports = {
  label: 'Timeline',
  context: {
    list1: fakerData1,
    list2: fakerData2
  }
};
