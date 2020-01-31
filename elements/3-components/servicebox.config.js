const faker = require('faker/locale/en');
const serviceBoxes = [];
const fakerData = [];

for (var i = 0; i < 4; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  serviceBoxes.push({
    heading: {
      level: '3',
      text: faker.commerce.product()
    }
  });
}

for (var i = 0; i < 4; i++) {
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
  label: 'Service Boxes',
  context: {
    box: serviceBoxes,
    list: fakerData
  }
};
