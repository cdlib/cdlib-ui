const faker = require('faker/locale/en');
const tableData = [];

for (var i = 0; i < 10; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  tableData.push({
    system: {
      name: faker.company.companyName(),
      status: faker.random.boolean(),
      maintenance: faker.lorem.sentence()
    }
  });
}

module.exports = {
  label: 'System Status',
  context: {
    row: tableData
  }
};
