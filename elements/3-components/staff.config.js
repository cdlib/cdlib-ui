const faker = require('faker/locale/en');
const tableData = [];

for (var i = 0; i < 10; i++) {
  tableData.push({
    firstname: {
      text: faker.name.firstName()
    },
    lastname: {
      text: faker.name.lastName()
    },
    position: {
      text: faker.name.jobTitle()
    }
  });
}

module.exports = {
  label: 'Staff Table',
  context: {
    row: tableData
  }
};
