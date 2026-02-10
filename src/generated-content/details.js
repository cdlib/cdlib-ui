const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  details: {
    summary: faker.lorem.sentence(),
    text: faker.lorem.sentences(20),
    text_before: faker.lorem.paragraphs(3),
    text_after: faker.lorem.paragraphs(3)
  }
}
