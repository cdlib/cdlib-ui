// Toggles //

// Secondary Nav Component:

if (document.querySelector('.c-secondarynav')) {
  const secondaryNavCloseButton = document.querySelector('.js-secondarynav__close-button')
  const secondaryNavOpenButton = document.querySelector('.js-secondarynav__open-button')
  const secondaryNavBody = document.querySelector('.js-secondarynav__body')

  secondaryNavOpenButton.addEventListener('click', function () {
    secondaryNavCloseButton.classList.add('is-shown')
    secondaryNavOpenButton.classList.remove('is-shown')
    secondaryNavBody.classList.add('is-open')
    secondaryNavCloseButton.focus()
  })

  secondaryNavCloseButton.addEventListener('click', function () {
    secondaryNavCloseButton.classList.remove('is-shown')
    secondaryNavOpenButton.classList.add('is-shown')
    secondaryNavBody.classList.remove('is-open')
    secondaryNavOpenButton.focus()
  })
}

// Header Component:

if (document.querySelector('.c-header')) {
  const headerSearchControl = document.querySelector('.js-header__search-control')
  const headerMenuControl = document.querySelector('.js-header__menu-control')
  const headerSearch = document.querySelector('.js-header__search')
  const searchField = document.querySelector('#c-search-field')
  const headerCloseSearch = document.querySelector('.js-header__close-search')
  const headerMainNav = document.querySelector('.js-header__header-nav')
  const headerUtilNav = document.querySelector('.js-header__utility-nav')

  headerSearchControl.addEventListener('click', function () {
    headerSearch.classList.add('is-open')
    searchField.focus()
  })

  headerMenuControl.addEventListener('click', function () {
    if (headerMenuControl.getAttribute('aria-expanded') === 'false') {
      headerMainNav.classList.add('is-open')
      headerUtilNav.classList.add('is-open')
      headerMenuControl.setAttribute('aria-expanded', true)
    } else {
      headerMainNav.classList.remove('is-open')
      headerUtilNav.classList.remove('is-open')
      headerMenuControl.setAttribute('aria-expanded', false)
    }
  })

  headerCloseSearch.addEventListener('click', function () {
    headerSearch.classList.remove('is-open')
    headerSearchControl.focus()
  })
}
