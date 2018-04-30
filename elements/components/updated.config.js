const faker = require('faker/locale/en');

module.exports = {
  label: 'Last Updated',
  context: {
    updated: {
      date: 'February 27, 2018',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }
  }
};
