const faker = require('faker/locale/en');

module.exports = {
  label: 'Highlight',
  context: {
    highlight: {
      image: faker.image.nature(),
      caption: faker.lorem.sentence(),
      descText: faker.lorem.paragraphs()
    },
    heading: {
      level: '2',
      text: faker.commerce.productName()
    }
  }
};
