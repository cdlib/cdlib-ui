const faker = require('faker/locale/en');

module.exports = {
  label: 'Horizontal Rule',
  context: {
    rule: {
      before: faker.lorem.sentences(10),
      after: faker.lorem.sentences(10)
    }
  }
};
