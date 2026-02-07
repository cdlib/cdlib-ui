const posts = require('../../sample-data/posts.json')
const authors = require('../../sample-data/users.json')
const categories = require('../../sample-data/categories.json')
let authorname = 'Firstname Lastname'
let authorlink = ''
const blogData = [];

for (const i of posts.keys()) {
  const post = [i]
  const postAuthorId = posts[post].author
  const postCategoryIds = posts[post].categories
  const postDateUnformatted = new Date(posts[post].modified)
  const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'};
  const postDate = postDateUnformatted.toLocaleDateString('en-US', dateFormat)
  const categoryData = [];

  for (const author of authors) {
    if (author.id === postAuthorId) {
      authorname = author.name
      authorlink = author.link
    }
  }

  for (const postCategoryId of postCategoryIds) {
    for (const category of categories) {
      if (category.id === postCategoryId) {
        categoryData.push({
          link: {
            text: category.name,
            url: category.link
          }
        })
      }
    }
  }

  blogData.push({
    blogheading: {
      heading: {
        level: '2'
      },
      link1: true,
      link: {
        text: posts[i].title.rendered,
        url: posts[i].link
      }
    },
    blogmetadata: {
      date: postDate,
      author: {
        link: {
          text: authorname,
          url: authorlink
        },
      },
      categoryList: categoryData
    },
    blogexcerpt: posts[i].excerpt.rendered
  })
}

module.exports = {
  label: 'Blog Results',
  context: {
    blogresult: blogData
  }
}
