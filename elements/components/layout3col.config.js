const faker = require('faker/locale/en');

module.exports = {
  label: 'Layout 3 Column',
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
      name: 'A: Local Nav',
      text: faker.lorem.paragraphs()
    },
    gridItem4: {
      name: 'B: Main Content',
      text: faker.lorem.paragraph()
    },
    gridItem5: {
      name: 'Section X',
      text: faker.lorem.paragraph()
    },
    gridItem6: {
      name: 'Section Y',
      text: faker.lorem.paragraph()
    },
    gridItem7: {
      name: 'Footer',
      text: faker.lorem.paragraph()
    }
  }
};
