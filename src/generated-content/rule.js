const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  rule: {
    text_before: {
      paragraph: {
        text: faker.lorem.sentences(10)
      }
    },
    text_after: {
      paragraph: {
        text: faker.lorem.sentences(10)
      }
    }
  }
}
