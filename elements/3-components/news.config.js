const faker = require('faker/locale/en');
const fakerData = [];

function removePeriod(string) {
  return string.replace('.', '');
}

for (var i = 0; i < 3; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
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
  label: 'News',
  context: {
    heading: {
      level: '2',
      text: 'Latest News'
    },
    sidebarbox: {
      text: faker.lorem.paragraph()
    },
    list: fakerData,
    link: {
      text: 'More...'
    }
  }
};
