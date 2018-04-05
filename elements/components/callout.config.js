const faker = require('faker/locale/en');
const paraData = [];

for (var i = 0; i < 3; i++) {
  paraData.push({
    callout: {
      text: faker.lorem.paragraph()
    }
  });
}

module.exports = {
  default: '1',
  label: 'Callout Box',
  context: {
    heading: {
      level: '1',
      text: 'Callout Box Heading'
    },
    paragraph: paraData
  }
};
