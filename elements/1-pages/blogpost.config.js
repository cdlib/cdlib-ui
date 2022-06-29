const posts = require('../../sample-data/posts.json')
const post = 1
const postTitle = posts[post].title.rendered
const postContent = posts[post].content.rendered

module.exports = {
  label: 'Blog Post',
  preview: '@template-page',
  context: {
    blogpost: {
      heading: {
        level: '1',
        text: postTitle
      },
      content: postContent
    }
  }
}
