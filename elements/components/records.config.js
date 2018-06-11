const faker = require('faker/locale/en');
const query = faker.commerce.product()

module.exports = {
  label: 'Search Records',
  context: {
    records: {
      total: faker.random.number(2000),
      query: query.toLowerCase()
    }
  }
};
