const { faker } = require('@faker-js/faker/locale/en');

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
      name: 'Service Heading',
      text: faker.lorem.sentence()
    },
    gridItemServices: {
      name: 'Service Boxes',
      text: faker.lorem.paragraph()
    },
    gridItemNews: {
      name: 'Newsreel',
      text: faker.lorem.paragraph()
    },
    gridItemQuicklinks1: {
      name: 'Quicklink 1',
      text: faker.lorem.paragraph()
    },
    gridItemQuicklinks2: {
      name: 'Quicklink 2',
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
