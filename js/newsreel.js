// ***** Newsreel Component ***** //

const items = document.querySelectorAll('.c-newsreel li')
const newsreelLinks = document.querySelectorAll('.c-newsreel a')
const firstItem = document.querySelector('.c-newsreel li:first-child')
const reelSpeed = 7000
const playControl = document.querySelector('.c-newsreel__play')
const pauseControl = document.querySelector('.c-newsreel__pause')
const tabControl = document.querySelector('.c-newsreel li a')
let currentItem = 0

for (let i = 0; i < newsreelLinks.length; i++) {
  newsreelLinks[i].setAttribute('tabindex', -1)
}

if (document.querySelector('.c-newsreel')) {
  // set initial states:
  playControl.style.display = 'none'
  firstItem.setAttribute('aria-current', 'true')

  // start newsreel:
  let itemInterval = setInterval(nextItem, reelSpeed)

  function goToItem (n) {
    items[currentItem].removeAttribute('aria-current')
    newsreelLinks[currentItem].setAttribute('tabindex', -1)
    currentItem = (n + items.length) % items.length
    newsreelLinks[currentItem].setAttribute('tabindex', 0)
    items[currentItem].setAttribute('aria-current', 'true')
  }

  function playNewsreel () {
    itemInterval = setInterval(nextItem, reelSpeed)
    playControl.style.display = 'none'
    pauseControl.style.display = 'inline-block'
  }

  function pauseNewsreel () {
    clearInterval(itemInterval)
    playControl.style.display = 'inline-block'
    pauseControl.style.display = 'none'
  }

  function nextItem () {
    goToItem(currentItem + 1)
  }

  playControl.onclick = function () {
    playNewsreel()
    pauseControl.focus()
  }

  pauseControl.onclick = function () {
    pauseNewsreel()
    playControl.focus()
  }

  tabControl.onfocus = function () {
    pauseNewsreel()
  }
}
