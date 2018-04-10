const faker = require('faker/locale/en');

module.exports = {
  label: 'Sidebar Box',
  context: {
    heading: {
      level: '1',
      text: 'Sidebar Box Heading'
    },
    sidebarbox: {
      text: faker.lorem.paragraph()
    }
  }
};
