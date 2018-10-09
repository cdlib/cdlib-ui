const faker = require('faker/locale/en');
const serviceBoxes = [];
const serviceBoxHeadings = ['Collect', 'Publish', 'Preserve', 'Access'];
const fakerData = [];

for (var i = 0; i < 4; i++) {
  serviceBoxes.push({
    heading: {
      level: '2',
      text: serviceBoxHeadings[i]
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
