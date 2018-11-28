const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 22; i++) {
  fakerData.push({
    link: {
      text: 2018 - i,
      url: '#' + (2018 - i)
    }
  });
}

module.exports = {
  label: 'Year Anchor List',
  context: {
    list: fakerData
  }
};
