const faker = require('faker/locale/en');
const navList = [];

for (var i = 0; i < 5; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  navList.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Mobile Nav',
  context: {
    list: navList
  },
  notes: 'Styling with this component only appears between base and large screen breakpoints; there is no styling after the mobile breakpoint.'
};
