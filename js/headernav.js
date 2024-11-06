// Headernav Component //

const headerNav = document.querySelector('.js-headernav')
const subNavs = headerNav.querySelectorAll(':scope > ul > li:has(> ul)')
const headerNavMediaQuery = window.matchMedia('(min-width: 760px)')
let counter = 1

if (document.querySelector('.c-headernav')) {
  for (const subNav of subNavs) {
    const subNavSiblingLink = subNav.querySelector('a')
    const subNavPopover = subNav.querySelector('ul')
    subNavPopover.popover = ''

    // Anchor each sibling link to its popover using unique anchor names:
    const anchorName = '--anchor' + counter++

    // The properties 'anchor-name' and 'position-anchor' can't be set using style.setProperty in browsers that don't support them. Instead, use setAttribute to force them to appear in so that the anchor positioning polyfill sees them:
    subNavSiblingLink.setAttribute('style', 'anchor-name: ' + anchorName)
    subNavPopover.setAttribute('style', 'position-anchor: ' + anchorName)

    const headerNavToggles = mq => {
      const expandedState = () => {
        if (subNavPopover.matches(':popover-open')) {
          subNavSiblingLink.setAttribute('aria-expanded', 'true')
        } else {
          subNavSiblingLink.setAttribute('aria-expanded', 'false')
        }
      }

      if (mq.matches) {
        // Only a <button> as a popover control has built-in accessiblity bindings, so set and toggle sibling link aria expanded state:
        subNavSiblingLink.setAttribute('aria-expanded', 'false') // initial state

        // Show/hide subnav on mouse pointer over and out:
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

    headerNavMediaQuery.addEventListener('change', headerNavToggles)
    headerNavToggles(headerNavMediaQuery)
  }
}
