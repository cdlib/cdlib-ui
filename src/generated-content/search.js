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
    form: {
      action: '/'
    },
    label: {
      class: 'o-label1',
      for: 'c-search-field',
      text: 'Search the California Digital Library'
    },
    input: {
      id: 'c-search-field',
      type: 'search',
      list: 'c-search-list',
      name: 's',
      value: '',
      placeholder: ''
    },
    button: {
      class: 'o-button4',
      type: 'submit',
      text: 'Search'
    },
    list: fakerData
  }
}
