// ***** Slideshow Component ***** //

function goToSlide (n) {
  if (enhanced) {
    // slides:
    slides[currentSlide].classList.remove('active')
    var currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i0 = 0; i0 < currentSlideLinks.length; i0++) {
      currentSlideLinks[i0].setAttribute('tabindex', -1)
    }
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add('active')
    currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i1 = 0; i1 < currentSlideLinks.length; i1++) {
      currentSlideLinks[i1].setAttribute('tabindex', 0)
    }
    // goto slide buttons:
    goToButtons[currentGoToButton].removeAttribute('aria-current')
    currentGoToButton = (n + goToButtons.length) % goToButtons.length
    goToButtons[currentGoToButton].setAttribute('aria-current', 'true')
  }
}

function playSlideshow () {
  slideInterval = setInterval(nextSlide, transitionSpeed)
  playButton.style.display = 'none'
  pauseButton.style.display = 'inline-block'
}

function pauseSlideshow () {
  clearInterval(slideInterval)
  playButton.style.display = 'inline-block'
  pauseButton.style.display = 'none'
}

function nextSlide () {
  goToSlide(currentSlide + 1)
}

// test if browser CSS.supports API is supported, then define it to 'enhanced' variable:

var supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false)
var enhanced = false

if (supportsCSS) {
  // eslint-disable-next-line compat/compat
  enhanced = CSS.supports('(display: grid) and (display: contents)')
}

if (document.querySelector('.c-slideshow')) {
  var mode = document.querySelector('.c-slideshow')
  var slideGroups = document.querySelectorAll('.c-slideshow__slide')
  var slides = document.querySelectorAll('.c-slideshow__slide figcaption')
  var slideshowLinks = document.querySelectorAll('.c-slideshow__slide a')
  var firstSlide = document.querySelector('.c-slideshow figcaption')
  var currentSlide = 0
  var goToButtons = document.querySelectorAll('.c-slideshow__goto')
  var firstGoToButton = document.querySelector('#c-slideshow__goto1')
  var currentGoToButton = 0
  var transitionSpeed = 10000
  var slideInterval = setInterval(nextSlide, transitionSpeed)
  var playButton = document.querySelector('.c-slideshow__play')
  var pauseButton = document.querySelector('.c-slideshow__pause')
  var slide1button = document.querySelector('#c-slideshow__goto1')
  var slide2button = document.querySelector('#c-slideshow__goto2')
  var slide3button = document.querySelector('#c-slideshow__goto3')
  var slide4button = document.querySelector('#c-slideshow__goto4')
  var randomSlide = Math.floor(Math.random() * slideGroups.length)

  // initial states:

  if (!enhanced) {
    mode.classList.add('basic')
    for (var i2 = 0; i2 < slideGroups.length; i2++) {
      slideGroups[randomSlide].classList.add('fixed')
    }
  } else {
    mode.classList.add('enhanced')
    playButton.style.display = 'none'
    firstSlide.classList.add('active')
    firstGoToButton.setAttribute('aria-current', 'true')
    for (var i3 = 0; i3 < slideshowLinks.length; i3++) {
      slideshowLinks[i3].setAttribute('tabindex', -1)
    }
  }

  playButton.onclick = function () {
    playSlideshow()
    pauseButton.focus()
  }

  pauseButton.onclick = function () {
    pauseSlideshow()
    playButton.focus()
  }

  slide1button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    var currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i4 = 0; i4 < currentSlideLinks.length; i4++) {
      currentSlideLinks[i4].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 0)
  }

  slide2button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    var currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i5 = 0; i5 < currentSlideLinks.length; i5++) {
      currentSlideLinks[i5].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 1)
  }

  slide3button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    var currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i6 = 0; i6 < currentSlideLinks.length; i6++) {
      currentSlideLinks[i6].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 2)
  }

  slide4button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    var currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (var i7 = 0; i7 < currentSlideLinks.length; i7++) {
      currentSlideLinks[i7].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 3)
  }
}
