const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    datalist: {
      option: faker.commerce.productName()
    }
  });
}

module.exports = {
  label: 'Search',
  context: {
    search: {
      action: '/'
    },
    label1: {
      for: 'c-header-search-field',
      text: 'Search the California Digital Library'
    },
    input1: {
      id: 'c-header-search-field',
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
    list: fakerData,
  },
  notes: "To test search field 'auto suggest' functionality, try entering sample titles used in Search Results component or page."
};
