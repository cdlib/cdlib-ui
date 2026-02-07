const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Paragraph',
  context: {
    paragraph: {
      text: faker.lorem.paragraphs()
    }
  }
};
