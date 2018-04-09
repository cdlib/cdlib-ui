const faker = require('faker/locale/en');
const paraData = [];

for (var i = 0; i < 3; i++) {
  paraData.push({
    heading: {
      level: '2',
      text: 'Sub Heading'
    },
    box: {
      text: faker.lorem.paragraph()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Box',
  context: {
    heading: {
      level: '1',
      text: 'Box Heading'
    },
    paragraph: paraData
  }
};
