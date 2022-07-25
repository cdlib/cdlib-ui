const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 15; i++) {
  fakerData.push({
    numbers: {
      item: faker.random.number() + ' ' + faker.lorem.words(4)
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
