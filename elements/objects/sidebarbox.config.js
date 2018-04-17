const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 5; i++) {
  fakerData.push({
    link: {
      text: faker.lorem.words(),
      url: faker.internet.url()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Sidebar Box',
  context: {
    heading: {
      level: '1',
      text: 'Sidebar Box Heading'
    },
    sidebarbox: {
      text: faker.lorem.paragraph()
    },
    listItem: fakerData
  }
};
