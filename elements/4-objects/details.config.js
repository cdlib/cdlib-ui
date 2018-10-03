const faker = require('faker/locale/en');

module.exports = {
  label: 'Details',
  context: {
    details: {
      summary: faker.lorem.sentence(),
      text: faker.lorem.sentences(20)
    }
  }
};
