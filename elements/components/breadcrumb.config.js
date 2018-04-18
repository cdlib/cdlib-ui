const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 2; i++) {
  fakerData.push({
    link: {
      text: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Breadcrumb Nav',
  context: {
    list: fakerData,
    breadcrumb: {
      activetext: 'This Page Title'
    }
  }
};
