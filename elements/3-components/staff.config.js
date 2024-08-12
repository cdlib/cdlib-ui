const { faker } = require('@faker-js/faker/locale/en');
const program = ['UC Curation Center (UC3)', 'Collection Development & Management', 'Infrastructure and Applications Support', 'Discovery & Delivery', 'Shared Cataloging Program (UC San Diego)', 'Collection Development & Management - Mass Digitization', 'Business Services'];
const tableData = []

for (var i = 0; i < 7; i++) {
  tableData.push({
    staff: {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      title: faker.person.jobTitle(),
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
