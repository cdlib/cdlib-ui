const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Layout 1 Column',
  context: {
    highlightGrid: true,
    gridItemHeader: {
      name: 'Header',
      text: faker.lorem.paragraph()
    },
    gridItemBreadcrumb: {
      name: 'Breadcrumb',
      text: faker.lorem.sentence()
    },
    gridItemMain: {
      name: 'Main Content',
      text: faker.lorem.paragraphs()
    },
    gridItemUpdated: {
      name: 'Last Updated',
      text: faker.lorem.sentence()
    },
    gridItemFooter: {
      name: 'Footer',
      text: faker.lorem.paragraph()
    }
  }
};
