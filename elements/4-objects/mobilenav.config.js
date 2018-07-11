const faker = require('faker/locale/en');
const navList = [];

for (var i = 0; i < 5; i++) {
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
  }
};
