const { faker } = require('@faker-js/faker')

module.exports = {
  avatar: {
    url: faker.image.personPortrait({ size: '256' }),
    alt: faker.person.fullName()
  }
}
