const faker = require('faker/locale/en');

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

module.exports = {
  label: 'Avatar',
  context: {
    avatar: {
      img: faker.image.avatar(),
      alt: faker.name.findName()
    }
  }
};
