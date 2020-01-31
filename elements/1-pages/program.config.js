const faker = require('faker/locale/en');
const fakeData = [];

for (var i = 0; i < 2; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
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
