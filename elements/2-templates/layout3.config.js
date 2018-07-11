const faker = require('faker/locale/en');

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
    gridItemSidebar: {
      name: 'A: Local Nav',
      text: faker.lorem.paragraph()
    },
    gridItemMain: {
      name: 'B: Main Content',
      text: faker.lorem.paragraphs()
    },
    gridItemX: {
      name: 'Section X',
      text: faker.lorem.paragraph()
    },
    gridItemY: {
      name: 'Section Y',
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
