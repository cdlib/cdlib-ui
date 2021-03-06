const faker = require('faker/locale/en');
const fakerData = [];
// process.env.NODE_ENV = 'testing'
// console.log(process.env.NODE_ENV)

for (var i = 0; i < 8; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    heading: {
      level: '2'
    },
    link1: true,
    link: {
      text: faker.commerce.productName() + faker.helpers.randomize([' for ', ' with ', ' and ', ': ']) + faker.commerce.productName()
    },
    blogresult: {
      quote: faker.lorem.sentence(30).slice(0, -1),
      link: {
        text: 'Read more'
      }
    }
  });
}

module.exports = {
  label: 'Blog Results',
  context: {
    list: fakerData,
  }
};
