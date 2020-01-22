// ***** Newsreel Component ***** //

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

if (document.querySelector('.c-newsreel')) {
  var items = document.querySelectorAll('.c-newsreel li')
  var newsreelLinks = document.querySelectorAll('.c-newsreel a')
  var firstItem = document.querySelector('.c-newsreel li:first-child')
  var currentItem = 0
  var reelSpeed = 7000
  var itemInterval = setInterval(nextItem, reelSpeed)
  var playControl = document.querySelector('.c-newsreel__play')
  var pauseControl = document.querySelector('.c-newsreel__pause')
  var tabControl = document.querySelector('.c-newsreel li a')

  // initial states:
  playControl.style.display = 'none'
  firstItem.setAttribute('aria-current', 'true')
  for (var i = 0; i < newsreelLinks.length; i++) {
    newsreelLinks[i].setAttribute('tabindex', -1)
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
