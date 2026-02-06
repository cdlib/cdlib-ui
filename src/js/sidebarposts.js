// ***** Sidebar Post Components ***** //

const sidebarPost = document.querySelector('.c-sidebarpost')
const authorSelect = document.querySelector('.js-sidebarpost--author select')
const authorButton = document.querySelector('.js-sidebarpost--author button')
const monthSelect = document.querySelector('.js-sidebarpost--month select')
const monthButton = document.querySelector('.js-sidebarpost--month button')

const selectType = type => {
  const selectValue = type.options[type.selectedIndex].value

  if (selectValue !== '') {
    window.open(selectValue, '_self')
  }
}

const buttonType = type => {
  type.setAttribute('aria-disabled', false)
}

if (sidebarPost) {
  authorSelect.addEventListener('change', () => {
    buttonType(authorButton)
  })

  authorButton.addEventListener('click', () => {
    selectType(authorSelect)
  })

  monthSelect.addEventListener('change', () => {
    buttonType(monthButton)
  })

  monthButton.addEventListener('click', () => {
    selectType(monthSelect)
  })
}
