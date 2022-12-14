const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Blockquote',
  context: {
    blockquote: {
      text: faker.lorem.sentences()
    }
  }
};
