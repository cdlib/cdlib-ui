const faker = require('faker/locale/en');
const firstname = faker.name.firstName();
const lastname = faker.name.firstName();

module.exports = {
  label: 'Updated',
  context: {
    updated: {
      date: 'February 27, 2018'
    },
    link: {
      url: 'mailto:' + lastname + '.' + firstname + '@ucop.edu',
      text: firstname + ' ' + lastname
    }
  }
};
