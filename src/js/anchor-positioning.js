// ***** Anchor Positioning Polyfill ***** //

// Required for positioning elements that use the popover API.

// https://github.com/oddbird/css-anchor-positioning

const anchorPositioningPolyfill = async () => {
  const { default: polyfill } = await import('@oddbird/css-anchor-positioning/dist/css-anchor-positioning-fn.js')

  polyfill()
}

if (!('anchorScope' in document.documentElement.style)) {
  anchorPositioningPolyfill()
}
