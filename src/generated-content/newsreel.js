const posts = require('../../sample-data/posts.json')
const sampleNews = [];

for (let i = 0; i < 10; i++) {
  const link = posts[i].link
  const title = posts[i].title.rendered

  sampleNews.push({
    link: {
      text: title,
      url: link
    }
  })
}

module.exports = {
  label: 'Newsreel',
  context: {
    heading: {
      level: '2',
      text: 'Latest News from CDL'
    },
    list: sampleNews,
    link: {
      text: 'View all news',
      url: 'https://cdlib.org/cdlinfo/'
    }
  }
}
