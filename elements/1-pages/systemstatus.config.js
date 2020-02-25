const faker = require('faker/locale/en');
const feedData = [];

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

for (var i = 0; i < 3; i++) {
  feedData.push({
    link1: true,
    link: {
      text: 'CDL Alert: ' + faker.lorem.sentence()
    },
    feed: {
      date: 7 + i + '/1' + i * 2 + '/2020'
    }
  });
}

module.exports = {
  label: 'System Status',
  preview: '@template-page',
  context: {
    mainheading: {
      heading: {
        level: '1',
        text: 'System Status'
      }
    },
    cdlalert: {
      heading: {
        level: '2',
        text: 'Latest CDLAlert'
      },
      feed: feedData
    }
  }
};
