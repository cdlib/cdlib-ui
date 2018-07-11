const faker = require('faker/locale/en');

module.exports = {
  label: 'Blockquote',
  context: {
    blockquote: {
      text: faker.lorem.sentences()
    }
  }
};
