const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 2; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
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
