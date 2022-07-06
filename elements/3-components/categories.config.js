const categories = require('../../sample-data/categories.json')
const categoryParents = categories.filter(el => el.parent === 0)
const categoryChildren = categories.filter(el => el.parent !== 0)
const categoriesFiltered = categoryParents.concat(categoryChildren)
const categoriesMap = new Map()
const categoryData = []

// Nest JSON child objects within their parents using id and parent properties. Adapted from https://stackoverflow.com/questions/72320459/restructure-2-arrays-with-objects-as-a-nested-array:

for (const category of categoriesFiltered) {
  category.list = []
  categoriesMap.set(category.id, category)

  if (category.parent === 0) {
    categoryData.push(category)
  } else {
    categoriesMap.get(category.parent).list.push(category)
  }
}

module.exports = {
  label: 'Categories',
  context: {
    list: categoryData
  }
}
