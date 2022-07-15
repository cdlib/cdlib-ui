const footerNav = require('../../sample-data/menu-items/footer-main-nav.json')
const legalNav = require('../../sample-data/menu-items/footer-legal-nav.json')
const footerNavParents = footerNav.filter(el => el.parent === 0)
const footerNavChildren = footerNav.filter(el => el.parent !== 0)
const footerNavSorted = footerNavParents.concat(footerNavChildren)
const footerNavMap = new Map()
const footerNavData = []
const legalNavData = []

for (const footerNavItem of footerNavSorted) {
  footerNavItem.list = []
  footerNavMap.set(footerNavItem.id, footerNavItem)

  if (footerNavItem.parent === 0) {
    footerNavData.push(footerNavItem)
  } else {
    footerNavMap.get(footerNavItem.parent).list.push(footerNavItem)
  }
}

for (const i of legalNav.keys()) {
  const title = legalNav[i].title.rendered
  const url = legalNav[i].url

  legalNavData.push({
    link: {
      text: title,
      url: url
    }
  })
}

module.exports = {
  label: 'Footer',
  context: {
    list: footerNavData,
    list2: legalNavData
  }
}
