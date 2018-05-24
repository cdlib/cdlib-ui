const faker = require('faker/locale/en');
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
      data: faker.address.country()
    },
    cell2: {
      data: faker.address.latitude()
    },
    cell3: {
      data: faker.address.longitude()
    },
    cell4: {
      data: faker.address.city()
    },
    cell5: {
      data: faker.commerce.productName()
    },
    cell6: {
      data: faker.address.zipCode()
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
