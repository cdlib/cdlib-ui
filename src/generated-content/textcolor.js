const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  textcolor: {
    textbefore: faker.lorem.sentences(1),
    colored: faker.lorem.sentences(1),
    textafter: faker.lorem.sentences(1)
  }
}
