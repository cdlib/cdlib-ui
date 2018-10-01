const faker = require('faker/locale/en');

module.exports = {
  label: 'Avatar',
  context: {
    avatar: {
      img: faker.image.avatar(),
      alt: faker.name.findName()
    }
  }
};
