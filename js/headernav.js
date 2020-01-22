// Headernav Component:

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.c-headernav')) {
    var subMenuItems = document.querySelectorAll('.c-headernav > ul > li.menu-item-has-children')
    var allMenuItems = document.querySelectorAll('.c-headernav > ul > li');

    [].forEach.call(subMenuItems, function (el) {
      document.querySelector('.c-headernav').classList.remove('c-headernav-no-js')
      document.querySelector('.c-headernav').classList.add('c-headernav-js')
      el.querySelector('a').setAttribute('aria-haspopup', 'true')
      el.querySelector('a').setAttribute('aria-expanded', 'false')

      el.addEventListener('mouseover', function (event) {
        this.classList.add('open')
        this.querySelector('a').setAttribute('aria-expanded', 'true')
      })

      el.addEventListener('mouseout', function (event) {
        this.classList.remove('open')
        this.querySelector('a').setAttribute('aria-expanded', 'false')
      })

      el.querySelector('a').addEventListener('click', function (event) {
        if (this.parentElement.classList.contains('open') === false) {
          this.parentElement.classList.add('open')
          this.setAttribute('aria-expanded', 'true')
        } else {
          this.parentElement.classList.remove('open')
          this.setAttribute('aria-expanded', 'false')
        }
        event.preventDefault()
      })
    });

    [].forEach.call(allMenuItems, function (el) {
      el.querySelector('a').addEventListener('focus', function (event) {
        [].forEach.call(
          allMenuItems,
          function (el) {
            if (el !== this.parentElement) {
              el.classList.remove('open')
              el.querySelector('a').setAttribute('aria-expanded', 'false')
            }
          }, this
        )
      })
    })
  }
})
