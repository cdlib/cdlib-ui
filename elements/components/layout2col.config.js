const faker = require('faker/locale/en');

module.exports = {
  label: 'Layout 2 Column',
  context: {
    highlightGrid: true,
    gridItem1: {
      name: 'Header',
      text: faker.lorem.paragraph()
    },
    gridItem2: {
      name: 'Breadcrumb',
      text: faker.lorem.sentence()
    },
    gridItem3: {
      name: 'Sidebar',
      text: faker.lorem.paragraphs()
    },
    gridItem4: {
      name: 'Main Content',
      text: faker.lorem.paragraph()
    },
    gridItem5: {
      name: 'Footer',
      text: faker.lorem.paragraph()
    }
  }
};
