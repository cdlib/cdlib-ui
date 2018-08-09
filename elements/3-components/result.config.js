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
      text: faker.commerce.productName()
    },
    result: {
      group: faker.helpers.randomize(['News and Media: CDLINFO', 'Information Services', 'User Experience Design Services', 'Discovery ＆ Delivery Program', 'Collections Program']),
      doctype: faker.helpers.randomize(['pdf', 'doc', 'xls', 'txt', 'zip', 'html']),
      quote: faker.lorem.words(30),
      date: faker.date.month() + ' ' + faker.random.number({min: 1, max: 30}) + ', ' + faker.random.number({min: 2000, max: 2018})
    }
  });
}

module.exports = {
  label: 'Search Results',
  context: {
    list: fakerData,
  }
};
