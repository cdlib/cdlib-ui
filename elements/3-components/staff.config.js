const faker = require('faker/locale/en');
const program = ['UC Curation Center (UC3)', 'Collection Development & Management', 'Infrastructure and Applications Support', 'Discovery & Delivery', 'Shared Cataloging Program (UC San Diego)', 'Collection Development & Management - Mass Digitization', 'Business Services'];
const tableData = []

for (var i = 0; i < 7; i++) {
  tableData.push({
    staff: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      title: faker.name.jobTitle(),
      program: program[i]
    }
  })
}

module.exports = {
  label: 'Staff Table',
  context: {
    row: tableData
  }
}
