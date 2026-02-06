// Set tool view mode to Preview or Full Page //

const previewButton = document.querySelector('#view-preview')
const fullpageButton = document.querySelector('#view-fullpage')
const toolLinks = document.querySelectorAll('nav a')

// Both scripts reload page upon back button. See Note #1 below:

// Works in Firefox and Safari, but not Chrome:
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload()
  }
}

// Works in Firefox and Chrome, but not Safari:
const perfEntries = performance.getEntriesByType('navigation')
if (perfEntries[0].type === 'back_forward') {
  window.location.reload()
}

if (previewButton) {
  previewButton.checked = true

  // Add target="preview" to all links:
  for (const toolLink of toolLinks) {
    toolLink.setAttribute('target', 'preview')
  }

  previewButton.addEventListener('click', () => {
    for (const toolLink of toolLinks) {
      toolLink.setAttribute('target', 'preview')
    }
  })

  fullpageButton.addEventListener('click', () => {
    for (const toolLink of toolLinks) {
      toolLink.removeAttribute('target')
    }
  })
}

// Note #1: Reloads tool index page when browser back button clicked from Full Page View Mode so that the View Mode returns to the Preview default state. Both scripts sourced from https://stackoverflow.com/questions/43043113/how-to-force-reloading-a-page-when-using-browser-back-button
