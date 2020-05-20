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
