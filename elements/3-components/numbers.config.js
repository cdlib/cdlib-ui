const { faker } = require('@faker-js/faker/locale/en');
const fakerData = [];

for (var i = 0; i < 15; i++) {
  fakerData.push({
    numbers: {
      item: faker.number.int(100) + ' ' + faker.lorem.words(4)
    },
    link: {
      text: faker.lorem.words(5)
    }
  });
}

module.exports = {
  label: 'By The Numbers',
  context: {
    list: fakerData
  }
};
