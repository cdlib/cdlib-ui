const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Figure & Caption',
  context: {
    figure: {
      alignmentClass: '',
      imageUrl: faker.image.nature(300, 200),
      caption: faker.lorem.sentences()
    }
  }
};
