const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  figure: {
    alignmentClass: '',
    imageUrl: faker.image.urlPicsumPhotos(),
    caption: faker.lorem.sentences()
  }
}
