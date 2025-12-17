// Headernav Component //

import { popoverSupport } from './popover-support'
const headerNav = document.querySelector('.js-headernav')
const subNavs = headerNav.querySelectorAll(':scope > ul > li:has(> ul)')
const headerNavMediaQuery = window.matchMedia('(min-width: 760px)')

if (headerNav && popoverSupport()) {
  for (const subNav of subNavs) {
    const subNavLink = subNav.querySelector('a')
    const subNavPopover = subNav.querySelector('ul')
    subNavPopover.popover = 'auto'
    subNavLink.setAttribute('role', 'button')

    const headerNavToggles = mq => {
      // Only a <button> as a popover invoker has built-in accessiblity bindings, so set and toggle the link's aria expanded state:
      const expandedState = () => {
        if (subNavPopover.matches(':popover-open')) {
          subNavLink.setAttribute('aria-expanded', 'true')
        } else {
          subNavLink.setAttribute('aria-expanded', 'false')
        }
      }

      if (mq.matches) {
        // Initial state:
        expandedState()

        // Show subnav on mouseover:
        subNav.addEventListener('mouseover', () => {
          subNavPopover.showPopover()
          expandedState()
        })

        // Hide subnav on mouseout:
        subNav.addEventListener('mouseout', () => {
          subNavPopover.hidePopover()
          expandedState()
        })

        // Toggle subnav if link clicked:
        subNavLink.addEventListener('click', (e) => {
          subNavPopover.togglePopover()
          expandedState()
          e.preventDefault() // disable link from going to its URL when clicked
        })

        // Hide previously opened subnav when keyboard focus leaves it:
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
