const post = 1
const posts = require('../../sample-data/posts.json')
const authors = require('../../sample-data/users.json')
const categories = require('../../sample-data/categories.json')
const postAuthorId = posts[post].author
let authorname = 'Firstname Lastname'
let authorlink = ''
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

module.exports = {
  label: 'Blog Metadata',
  context: {
    blogmetadata: {
      date: postDate,
      author: {
        link: {
          text: authorname,
          url: authorlink
        },
      },
      categoryList: categoryData
    }
  }
};
