const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  image: {
    src: faker.image.urlPicsumPhotos(),
    alt: faker.lorem.sentence()
  }
}
