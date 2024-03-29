const sampleData = [];
const posts = require('../../sample-data/posts.json')

for (let i = 0; i < 3; i++) {
  const link = posts[i].link
  const title = posts[i].title.rendered

  sampleData.push({
    link: {
      text: title,
      url: link
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
      text: 'Recent Posts'
    },
    list: sampleData
  }
};
