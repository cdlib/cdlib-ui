const { faker } = require('@faker-js/faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    datalist: {
      option: faker.commerce.productName()
    }
  });
}

module.exports = {
  search: {
    search: {
      action: '/'
    },
    label: {
      exists: true,
      for: 'c-search-field',
      text: 'Search the California Digital Library'
    },
    input1: {
      id: 'c-search-field',
      type: 'search',
      list: 'c-search-list',
      name: 's',
      value: '',
      placeholder: ''
    },
    button4: {
      type: 'submit',
      text: 'Search'
    },
    list: fakerData
  }
}
