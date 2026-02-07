const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'SCP Text Color',
  context: {
    textcolor: {
      textbefore: faker.lorem.sentences(1),
      colored: faker.lorem.sentences(1),
      textafter: faker.lorem.sentences(1)
    }
  }
};
