// Media Queries //

var screen2 = window.matchMedia('(min-width: 760px)')

function secondaryNavComp (screenWidth) {
  if (screenWidth.matches) {
    secondaryNavButtons.classList.remove('is-open')
    secondaryNavCloseButton.classList.add('is-shown')
    secondaryNavOpenButton.classList.remove('is-shown')
    secondaryNavBody.classList.add('is-open')
  } else {
    secondaryNavButtons.classList.add('is-open')
    secondaryNavCloseButton.classList.remove('is-shown')
    secondaryNavOpenButton.classList.add('is-shown')
    secondaryNavBody.classList.remove('is-open')
  }
}

function headerComp (screenWidth) {
  if (screenWidth.matches) {
    headerMenuControl.setAttribute('aria-expanded', true)
    headerSearch.classList.add('is-open')
    headerMainNav.classList.add('is-open')
    headerUtilNav.classList.add('is-open')
  } else {
    headerMenuControl.setAttribute('aria-expanded', false)
    headerSearch.classList.remove('is-open')
    headerMainNav.classList.remove('is-open')
    headerUtilNav.classList.remove('is-open')
  }
}

// Secondary Nav Component

if (document.querySelector('.c-secondarynav')) {
  var secondaryNavButtons = document.querySelector('.js-secondarynav__buttons')
  var secondaryNavCloseButton = document.querySelector('.js-secondarynav__close-button')
  var secondaryNavOpenButton = document.querySelector('.js-secondarynav__open-button')
  var secondaryNavBody = document.querySelector('.js-secondarynav__body')

  secondaryNavComp(screen2)
  screen2.addListener(secondaryNavComp)
}

// Header Component

if (document.querySelector('.c-header')) {
  var headerControls = document.querySelector('.js-header__controls')
  var headerMenuControl = document.querySelector('.js-header__menu-control')
  var headerSearch = document.querySelector('.js-header__search')
  var headerCloseSearch = document.querySelector('.js-header__close-search')
  var headerMainNav = document.querySelector('.js-header__header-nav')
  var headerUtilNav = document.querySelector('.js-header__utility-nav')

  // prepare for JS:
  headerControls.removeAttribute('hidden')
  headerCloseSearch.removeAttribute('hidden')

  headerComp(screen2)
  screen2.addListener(headerComp)
}
