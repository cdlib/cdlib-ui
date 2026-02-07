const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Figure & Caption',
  context: {
    figure: {
      alignmentClass: '',
      imageUrl: faker.image.urlPicsumPhotos(),
      caption: faker.lorem.sentences()
    }
  }
};
