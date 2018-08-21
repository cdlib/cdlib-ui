const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 8; i++) {
  fakerData.push({
    heading: {
      level: '2'
    },
    link1: true,
    link2: false,
    link: {
      text: faker.commerce.productName() + faker.helpers.randomize([' for ', ' with ', ' and ', ': ']) + faker.commerce.productName()
    },
    blogresult: {
      date: faker.date.month() + ' ' + faker.random.number({min: 1, max: 30}) + ', ' + faker.random.number({min: 2000, max: 2018}),
      categories: 'Collection Development, Newsletter, Shared Print, Staff News',
      author: faker.name.findName(),
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
