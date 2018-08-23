const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 8; i++) {
  fakerData.push({
    heading: {
      level: '2',
      text: faker.commerce.productName() + faker.helpers.randomize([' for ', ' with ', ' and ', ': ']) + faker.commerce.productName()
    },
    blogresult: {
      quote: faker.lorem.sentence(30)
    }
  });
}

module.exports = {
  label: 'Blog Results',
  context: {
    list: fakerData,
  }
};
