const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  rule: {
    before: faker.lorem.sentences(10),
    after: faker.lorem.sentences(10)
  }
}
