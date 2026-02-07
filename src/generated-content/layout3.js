const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Layout 3 Column',
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
    gridItemSidebar1: {
      name: 'A: Local Nav',
      text: faker.lorem.paragraph()
    },
    gridItemMain: {
      name: 'B: Main Content',
      text: faker.lorem.paragraphs()
    },
    gridItemSidebar2a: {
      name: 'Sidebar Box 1',
      text: faker.lorem.paragraph()
    },
    gridItemSidebar2b: {
      name: 'Sidebar Box 2',
      text: faker.lorem.paragraph()
    },
    gridItemSidebar2c: {
      name: 'Sidebar Box 3',
      text: faker.lorem.paragraph()
    },
    gridItemSidebar2d: {
      name: 'Sidebar Box 4',
      text: faker.lorem.paragraph()
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
