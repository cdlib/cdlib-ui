const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    image: {
      src: 'https://loremflickr.com/800/600/nature?random=' + i,
      alt: faker.lorem.sentence()
    }
  });
}

module.exports = {
  label: 'Images in Content',
  context: {
    images: fakerData
  }
};
