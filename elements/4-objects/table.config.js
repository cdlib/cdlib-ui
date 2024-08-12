const { faker } = require('@faker-js/faker/locale/en');
const tableHeader = [];
const tableData = [];
const tableHeaderLabels = ['Country', 'Latitude', 'Longitude', 'City', 'Product', 'Inventory ID'];

for (var i = 0; i < tableHeaderLabels.length; i++) {
  tableHeader.push({
    cell1: {
      data: tableHeaderLabels[i]
    }
  });
}

for (var i = 0; i < 15; i++) {
  tableData.push({
    cell1: {
      data: faker.location.country()
    },
    cell2: {
      data: faker.location.latitude()
    },
    cell3: {
      data: faker.location.longitude()
    },
    cell4: {
      data: faker.location.city()
    },
    cell5: {
      data: faker.commerce.productName()
    },
    cell6: {
      data: faker.location.zipCode()
    }
  });
}

module.exports = {
  label: 'Table',
  context: {
    row1: tableHeader,
    row2: tableData
  }
};
