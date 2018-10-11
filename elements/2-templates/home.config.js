const faker = require('faker/locale/en');

module.exports = {
  label: 'Home',
  context: {
    highlightGrid: true,
    gridItemHeader: {
      name: 'Header',
      text: faker.lorem.paragraph()
    },
    gridItemSlideshow: {
      name: 'Slideshow',
      text: faker.lorem.paragraph()
    },
    gridItemSubheading: {
      name: 'Sub Heading',
      text: faker.lorem.paragraph()
    },
    gridItemServices: {
      name: 'Services',
      text: faker.lorem.paragraph()
    },
    gridItemNews: {
      name: 'News',
      text: faker.lorem.paragraph()
    },
    gridItemQuicklinks1: {
      name: 'Quicklinks 1',
      text: faker.lorem.paragraph()
    },
    gridItemQuicklinks2: {
      name: 'Quicklinks 2',
      text: faker.lorem.paragraph()
    },
    gridItemMeet: {
      name: 'Meet',
      text: faker.lorem.paragraph()
    },
    gridItemSocial: {
      name: 'Social',
      text: faker.lorem.paragraph()
    },
    gridItemFooter: {
      name: 'Footer',
      text: faker.lorem.paragraph()
    }
  }
};
