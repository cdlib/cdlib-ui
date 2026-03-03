const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  well: {
    heading_1: {
      heading: {
        level: 2,
        text: faker.commerce.productName()
      }
    },
    paragraph: {
      text: 'Paragraph text. ' + faker.lorem.sentences(10)
    },
    blockquote: {
      text: 'Blockquote text. ' + faker.lorem.sentences(10)
    },
    figure: {
      alignmentClass: 'alignleft',
      imageUrl: 'http://loremflickr.com/300/200/nature',
      caption: faker.lorem.sentences(2)
    },
    heading_2: {
      heading: {
        level: 2,
        text: 'This Heading Shouldn\'t Float Right of Figure Above'
      }
    },
    link_1: {
      link: {
        text: faker.commerce.productName()
      }
    },
    link_2: {
      link: {
        text: faker.commerce.productName()
      }
    }
  }
}
