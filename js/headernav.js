// Headernav Component:
const headerNavMediaQuery = window.matchMedia('(min-width: 760px)')
const headerNav = document.querySelector('.js-headernav')
const subNavs = headerNav.querySelectorAll(':scope > ul > li:has(> ul)')
let counter = 1

const headerNavToggles = e => {
  if (document.querySelector('.c-headernav') && e.matches) {
    for (const subNav of subNavs) {
      const subNavSiblingLink = subNav.querySelector('a')
      const subNavPopover = subNav.querySelector('ul')
      subNavPopover.popover = ''

      // Anchor each sibling link to its popover using unique anchor names:
      const anchorName = '--anchor' + counter++
      subNavSiblingLink.style.setProperty('anchor-name', anchorName)
      subNavPopover.style.setProperty('position-anchor', anchorName)

      // Only a <button> as a popover control has built-in accessiblity bindings, so set and toggle sibling link aria expanded state:
      subNavSiblingLink.setAttribute('aria-expanded', 'false') // initial state

      const expandedState = () => {
        if (subNavPopover.matches(':popover-open')) {
          subNavSiblingLink.setAttribute('aria-expanded', 'true')
        } else {
          subNavSiblingLink.setAttribute('aria-expanded', 'false')
        }
      }

      // Show/hide subnav on mouse pointer over and out.
      subNav.addEventListener('mouseover', () => {
        subNavPopover.showPopover()
        expandedState()
      })

      subNav.addEventListener('mouseout', () => {
        subNavPopover.hidePopover()
        expandedState()
      })

      // Toggle subnav if sibling link is clicked by keyboard return key:
      subNavSiblingLink.addEventListener('click', (e) => {
        subNavPopover.togglePopover()
        e.preventDefault() // disable link from going to its URL when clicked
        expandedState()
      })

      // Hide subnav when keyboard focus leaves its popover control:
      subNav.addEventListener('focusout', (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          subNavPopover.hidePopover()
          expandedState()
        }
      })
    }
  }
}

if (window.HTMLElement.prototype.hasOwnProperty('popover')) { // eslint-disable-line no-prototype-builtins
  headerNav.classList.remove('no-popover')
  headerNavMediaQuery.addEventListener('change', headerNavToggles)
  headerNavToggles(headerNavMediaQuery)
}
