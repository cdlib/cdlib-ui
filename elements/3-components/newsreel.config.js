const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 5; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    link: {
      text: faker.commerce.productName() + faker.helpers.randomize([' with CDL for ', ' at CDL with ', ' with CDL and ', ' at CDL for ']) + faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Newsreel',
  context: {
    heading: {
      level: '2',
      text: 'Latest News from CDL'
    },
    list: fakerData,
    link: {
      text: 'View all news'
    }
  }
};
