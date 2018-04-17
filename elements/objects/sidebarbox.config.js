const faker = require('faker/locale/en');
const fakerData = [];

function removePeriod(string) {
  return string.replace('.', '');
}

for (var i = 0; i < 5; i++) {
  fakerData.push({
    link: {
      text: removePeriod(faker.lorem.sentence()),
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
