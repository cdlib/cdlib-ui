const faker = require('faker/locale/en');

module.exports = {
  label: 'Avatar',
  context: {
    avatar: {
      img: 'https://loremflickr.com/134/145/face',
      alt: faker.name.findName()
    }
  }
};
