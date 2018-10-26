const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 4; i++) {
  fakerData.push({
    slide: {
      heading: faker.commerce.productName(),
      text: faker.lorem.sentences(2),
      imageSmall: 'https://loremflickr.com/740/500/nature?size=small&random=' + i,
      imageLarge: 'https://loremflickr.com/1095/740/nature?size=big&random=' + i,
      alt: faker.commerce.productName(),
      credits: 'Photo by ' + faker.name.findName()+ '. Courtesy of ' + faker.lorem.words(),
      number: i + 1
    }
  });
}

module.exports = {
  label: 'Slideshow',
  context: {
    slides: fakerData
  }
};
