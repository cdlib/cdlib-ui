// ***** Popover Support for CSS ***** //

// If the popover element is detected in the browser, remove the no-popover class from the html tag.

if (window.HTMLElement.prototype.hasOwnProperty('popover')) { // eslint-disable-line no-prototype-builtins
  document.querySelector('html').classList.remove('no-popover')
}
