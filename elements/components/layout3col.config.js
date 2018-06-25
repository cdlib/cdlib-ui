const faker = require('faker/locale/en');

module.exports = {
  label: 'Layout 3 Column',
  context: {
    gridItem1: {
      name: 'A: Local Nav',
      text: faker.lorem.paragraph()
    },
    gridItem2: {
      name: 'B: Main Content',
      text: faker.lorem.paragraphs()
    },
    gridItem3: {
      name: 'C: Secondary / Sidebar Content'
    },
    gridItem4: {
      name: 'Section X',
      text: faker.lorem.paragraph()
    },
    gridItem5: {
      name: 'Section Y',
      text: faker.lorem.paragraph()
    }
  }
};
