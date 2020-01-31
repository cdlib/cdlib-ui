const faker = require('faker/locale/en');
const program = ['UC Curation Center (UC3)', 'Collection Development & Management', 'Infrastructure and Applications Support', 'Discovery & Delivery', 'Shared Cataloging Program (UC San Diego)', 'Collection Development & Management - Mass Digitization', 'Business Services'];
const tableData = [];

for (var i = 0; i < 15; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  tableData.push({
    firstname: {
      text: faker.name.firstName()
    },
    lastname: {
      text: faker.name.lastName()
    },
    title: {
      text: faker.name.jobTitle()
    },
    program: {
      text: faker.helpers.randomize(program)
    }
  });
}

module.exports = {
  label: 'Staff Table',
  context: {
    row: tableData
  }
};
