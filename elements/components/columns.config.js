const faker = require('faker/locale/en');

module.exports = {
  label: 'Columns',
  context: {
    column1: {
      text: faker.lorem.paragraph()
    },
    column2: {
      text: faker.lorem.paragraphs()
    },
    column3: {
      text: faker.lorem.paragraph()
    }
  }
};
