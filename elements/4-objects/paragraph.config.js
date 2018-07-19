const faker = require('faker/locale/en');

module.exports = {
  label: 'Paragraph',
  context: {
    paragraph: {
      text: faker.lorem.paragraphs()
    }
  }
};
