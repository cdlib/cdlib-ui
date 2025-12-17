// ***** Popover Support for CSS ***** //

// If the popover element is detected in the browser, remove the no-popover class from the html tag.

const popoverSupport = () => {
  return Object.hasOwn(window.HTMLElement.prototype, 'popover')
}

if (popoverSupport()) {
  document.querySelector('html').classList.remove('no-popover')
}

export { popoverSupport }
