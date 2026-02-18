const { faker } = require('@faker-js/faker/locale/en');
const navList = [];

for (var i = 0; i < 5; i++) {
  navList.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  mobilenav: {
    list: navList
  }
}
