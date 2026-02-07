const nav = require('../../sample-data/menu-items/header-main-nav.json')
const navParents = nav.filter(el => el.parent === 0)
const navChildren = nav.filter(el => el.parent !== 0)
const navSorted = navParents.concat(navChildren)
const navMap = new Map();
const parentColumns = ['columns-2', 'columns-3']
let parentIndex = 0
const navData = []

// Nest JSON child objects within their parents using id and parent properties. Adapted from https://stackoverflow.com/questions/72320459/restructure-2-arrays-with-objects-as-a-nested-array:

for (const navItem of navSorted) {
  navItem.list = []
  navMap.set(navItem.id, navItem)

  if (navItem.parent === 0) {
    navItem.parent_columns = parentColumns[parentIndex]
    parentIndex++
    navData.push(navItem)
  } else {
    navMap.get(navItem.parent).list.push(navItem)
  }
}

module.exports = {
  label: 'Header Nav',
  context: {
    list: navData
  }
}
