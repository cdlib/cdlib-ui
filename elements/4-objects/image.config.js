const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Images in Content',
  context: {
    image: {
      src: faker.image.nature(800, 600),
      alt: faker.lorem.sentence()
    }
  }
}
