// Filter Component //

function filterItems (listItems) {
  listItems.forEach(function (el) {
    el.querySelector('a').addEventListener('focus', function () {
      listItems.forEach(function (el) {
        if (el === this.parentElement) {
          el.querySelector('a').setAttribute('aria-current', 'page')
        } else {
          el.querySelector('a').removeAttribute('aria-current')
        }
      }, this)
    })
  })
}

if (document.querySelector('.c-filter')) {
  var showItems = document.querySelectorAll('#js-filter__show-group li')
  var sortItems = document.querySelectorAll('#js-filter__sort-group li')

  filterItems(showItems)
  filterItems(sortItems)
}
