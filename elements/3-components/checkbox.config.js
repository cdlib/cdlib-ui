const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 6; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    checkbox: {
      label: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Checkbox',
  context: {
    checkbox: fakerData
  },
  notes: 'Markup for this component reflects the WordPress Contact Form 7 plugin.'
};
