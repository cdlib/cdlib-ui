const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Images in Content',
  context: {
    image: {
      src: faker.image.urlPicsumPhotos(),
      alt: faker.lorem.sentence()
    }
  }
}
