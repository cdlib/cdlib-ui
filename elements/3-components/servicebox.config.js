const faker = require('faker/locale/en');
const serviceBoxes = [];
const fakerData = [];

for (var i = 0; i < 4; i++) {
  serviceBoxes.push({
    heading: {
      level: '2',
      text: faker.commerce.product()
    }
  });
}

for (var i = 0; i < 4; i++) {
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
