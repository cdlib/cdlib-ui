const faker = require('faker/locale/en');
const fakerData = [];

function removePeriod(string) {
  return string.replace('.', '');
}

for (var i = 0; i < 5; i++) {
  fakerData.push({
    link: {
      text: removePeriod(faker.lorem.sentence()),
      url: faker.internet.url(),
      external: faker.random.boolean()
    }
  });
}

module.exports = {
  collated: true,
  default: '1',
  label: 'Sidebar Box',
  context: {
    heading: {
      level: '2',
      text: 'Sidebar Box Heading'
    },
    sidebarbox: {
      text: faker.lorem.paragraph()
    },
    listItem: fakerData
  }
};
