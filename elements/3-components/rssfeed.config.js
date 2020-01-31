const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 3; i++) {
  if (process.env.NODE_ENV === 'testing') {
    faker.seed(123);
  }
  fakerData.push({
    heading: {
      level: '2'
    },
    link1: true,
    link: {
      text: 'CDL Alert: ' + faker.lorem.sentence()
    },
    feed: {
      date: 7 + i + '/' + '/1' + i * 2 + '/2018'
    }
  });
}

module.exports = {
  label: 'RSS Feed',
  context: {
    heading: {
      level: '2',
      text: 'RSS Feed Title'
    },
    feed: fakerData
  },
  notes: "This component uses the HTML generated from the WP Aggregator Widget, including the `.rss-aggregator` class. There are no uniquely-named CSS classes (like `rssfeed`) used for this component."
};
