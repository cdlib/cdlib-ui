const faker = require('faker/locale/en');
const paraData = [];

for (var i = 0; i < 3; i++) {
  paraData.push({
    box: {
      text: faker.lorem.paragraph()
    }
  });
}

module.exports = {
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
