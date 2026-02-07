const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Blog 2 Column',
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
    gridItemSidebar1: {
      name: 'Sidebar 1',
      text: faker.lorem.paragraph()
    },
    gridItemSidebar2: {
      name: 'Sidebar 2',
      text: faker.lorem.paragraph()
    },
    gridItemFooter: {
      name: 'Footer',
      text: faker.lorem.paragraph()
    }
  }
};
