const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  collated: true,
  default: '1',
  label: 'Well',
  context: {
    heading: {
      level: 2,
      text: faker.commerce.productName()
    },
    well: {
      text: faker.lorem.sentences(10)
    },
    link: {
      text: faker.commerce.productName()
    },
    figure: {
      alignmentClass: 'alignleft',
      imageUrl: 'http://loremflickr.com/300/200/nature',
      caption: faker.lorem.sentences(2)
    }
  }
};
