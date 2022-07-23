const posts = require('../../sample-data/search-results.json')
const filetypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'zip', 'html', 'rtf']
const searchResultData = []

for (const i of posts.keys()) {
  const post = [i]
  const postDateUnformatted = new Date(posts[post].modified)
  const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'};
  const postDate = postDateUnformatted.toLocaleDateString('en-US', dateFormat)
  const filetype = filetypes[i]
  const postTitle = posts[i].title.rendered
  const postLink = posts[i].link
  const postExcerpt = posts[i].excerpt.rendered
  const postExcpertReformatted = postExcerpt.replaceAll('<em>', '<mark>').replaceAll('</em>', '</mark>')

  searchResultData.push({
    searchresultheading: {
      heading: {
        level: '2'
      },
      link1: true,
      link2: false,
      link: {
        text: postTitle,
        url: postLink
      }
    },
    doctype: filetype,
    excerpt: postExcpertReformatted,
    datetime: postDate
  })
}

module.exports = {
  label: 'Search Results',
  context: {
    searchresult: searchResultData
  }
}
