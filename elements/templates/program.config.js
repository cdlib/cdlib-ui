const faker = require('faker/locale/en');
const fakeData = [];

for (var i = 0; i < 2; i++) {
  fakeData.push({
    program: {
      text: faker.lorem.paragraph()
    }
  });
}

module.exports = {
  label: 'Program',
  context: {
    paragraph: fakeData,
    heading: {
      level: '1',
      text: 'Program Name'
    }
  }
};
