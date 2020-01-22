// ***** Sidebar Post Components ***** //

function openAuthor () {
  var selectValue = authorSelect.options[authorSelect.selectedIndex].value
  window.open(selectValue, '_self')
}

function enableAuthorButton () {
  document.querySelector('#c-sidebarpost--author button').disabled = false
}

function openMonth () {
  var selectValue = monthsSelect.options[monthsSelect.selectedIndex].value
  window.open(selectValue, '_self')
}

function enableMonthButton () {
  document.querySelector('#c-sidebarpost--month button').disabled = false
}

if (document.querySelector('.c-sidebarpost')) {
  // Author Component:

  var authorSelect = document.querySelector('#c-sidebarpost--author select')

  authorSelect.addEventListener('change', enableAuthorButton)

  // Month Component:

  var monthsSelect = document.querySelector('#c-sidebarpost--month select')

  monthsSelect.addEventListener('change', enableMonthButton)
}
