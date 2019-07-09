const faker = require('faker/locale/en');

module.exports = {
  label: 'Figure & Caption',
  context: {
    figure: {
      alignmentClass: '',
      imageUrl: 'http://lorempixel.com/300/200/nature',
      caption: faker.lorem.sentences()
    }
  }
};
