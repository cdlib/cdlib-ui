// ***** Popover Support for CSS ***** //

if (window.HTMLElement.prototype.hasOwnProperty('popover')) { // eslint-disable-line no-prototype-builtins
  document.querySelector('html').classList.remove('no-popover')
}
