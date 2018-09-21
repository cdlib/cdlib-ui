const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 5; i++) {
  fakerData.push({
    slide: {
      heading: faker.commerce.productName(),
      text: faker.lorem.sentences(3),
      image: 'https://loremflickr.com/800/500/nature?random=' + i
    }
  });
}

module.exports = {
  label: 'Slideshow',
  context: {
    slides: fakerData
  }
};
