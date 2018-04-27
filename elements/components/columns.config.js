const faker = require('faker/locale/en');

module.exports = {
  label: 'Columns',
  context: {
    column1: {
      name: 'A: Local Nav',
      text: faker.lorem.paragraph()
    },
    column2: {
      name: 'B: Main Content',
      text: faker.lorem.paragraphs()
    },
    column3: {
      name: 'C: Secondary / Sidebar Content',
      text: faker.lorem.sentence()
    },
    column4: {
      name: 'Section X',
      text: faker.lorem.paragraph()
    },
    column5: {
      name: 'Section Y',
      text: faker.lorem.paragraph()
    }
  }
};
