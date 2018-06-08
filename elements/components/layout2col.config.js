const faker = require('faker/locale/en');

module.exports = {
  label: 'Layout 2 Column',
  context: {
    gridItem1: {
      name: 'Sidebar',
      text: faker.lorem.paragraph()
    },
    gridItem2: {
      name: 'Main Content',
      text: faker.lorem.paragraphs()
    }
  }
};
