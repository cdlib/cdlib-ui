const faker = require('faker/locale/en');
const paraData = [];

for (var i = 0; i < 3; i++) {
  paraData.push({
    heading: {
      level: '2'
    },
    link1: true,
    link: {
      text: faker.commerce.productName()
    },
    mainbox: {
      text: faker.lorem.paragraph()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Main Box',
  context: {
    heading: {
      level: '2',
      text: 'Main Box Heading'
    },
    paragraph: paraData
  }
};
