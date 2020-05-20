// Toggles //

// Secondary Nav Component:

if (document.querySelector('.c-secondarynav')) {
  var secondaryNavCloseButton = document.querySelector('.js-secondarynav__close-button')
  var secondaryNavOpenButton = document.querySelector('.js-secondarynav__open-button')
  var secondaryNavBody = document.querySelector('.js-secondarynav__body')

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
  var headerSearchControl = document.querySelector('.js-header__search-control')
  var headerMenuControl = document.querySelector('.js-header__menu-control')
  var headerSearch = document.querySelector('.js-header__search')
  var headerSearchField = document.querySelector('#c-header-search-field')
  var headerCloseSearch = document.querySelector('.js-header__close-search')
  var headerMainNav = document.querySelector('.js-header__header-nav')
  var headerUtilNav = document.querySelector('.js-header__utility-nav')

  headerSearchControl.addEventListener('click', function () {
    headerSearch.classList.add('is-open')
    headerSearchField.focus()
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
