// ***** Slideshow Component ***** //

const mode = document.querySelector('.c-slideshow')
const slideGroups = document.querySelectorAll('.c-slideshow__slide')
const slides = document.querySelectorAll('.c-slideshow__slide figcaption')
const slideshowLinks = document.querySelectorAll('.c-slideshow__slide a')
const firstSlide = document.querySelector('.c-slideshow figcaption')
const goToButtons = document.querySelectorAll('.c-slideshow__goto')
const firstGoToButton = document.querySelector('#c-slideshow__goto1')
const transitionSpeed = 11000
const playButton = document.querySelector('.c-slideshow__play')
const pauseButton = document.querySelector('.c-slideshow__pause')
const slide1button = document.querySelector('#c-slideshow__goto1')
const slide2button = document.querySelector('#c-slideshow__goto2')
const slide3button = document.querySelector('#c-slideshow__goto3')
const slide4button = document.querySelector('#c-slideshow__goto4')
const randomSlide = Math.floor(Math.random() * slideGroups.length)
let currentSlide = 0
let currentGoToButton = 0
let enhanced = false

// check if browser CSS.supports API support is true or false:
const supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false)

if (document.querySelector('.c-slideshow')) {
  // set initial states:

  if (supportsCSS) {
    enhanced = window.CSS.supports('(display: grid) and (display: contents)')
  }

  if (!enhanced) {
    mode.classList.add('basic')
    for (let i2 = 0; i2 < slideGroups.length; i2++) {
      slideGroups[randomSlide].classList.add('fixed')
    }
  } else {
    mode.classList.add('enhanced')
    playButton.style.display = 'none'
    firstSlide.classList.add('active')
    firstGoToButton.setAttribute('aria-current', 'true')
    for (let i3 = 0; i3 < slideshowLinks.length; i3++) {
      slideshowLinks[i3].setAttribute('tabindex', -1)
    }
  }

  // start slideshow:
  let slideInterval = setInterval(nextSlide, transitionSpeed)

  function goToSlide (n) {
    if (enhanced) {
      // slides:
      slides[currentSlide].classList.remove('active')
      let currentSlideLinks = slides[currentSlide].querySelectorAll('a')
      for (let i0 = 0; i0 < currentSlideLinks.length; i0++) {
        currentSlideLinks[i0].setAttribute('tabindex', -1)
      }
      currentSlide = (n + slides.length) % slides.length
      slides[currentSlide].classList.add('active')
      currentSlideLinks = slides[currentSlide].querySelectorAll('a')
      for (let i1 = 0; i1 < currentSlideLinks.length; i1++) {
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
    pauseButton.style.display = 'inline-flex'
  }

  function pauseSlideshow () {
    clearInterval(slideInterval)
    playButton.style.display = 'inline-flex'
    pauseButton.style.display = 'none'
  }

  function nextSlide () {
    goToSlide(currentSlide + 1)
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
    const currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (let i4 = 0; i4 < currentSlideLinks.length; i4++) {
      currentSlideLinks[i4].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 0)
  }

  slide2button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    const currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (let i5 = 0; i5 < currentSlideLinks.length; i5++) {
      currentSlideLinks[i5].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 1)
  }

  slide3button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    const currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (let i6 = 0; i6 < currentSlideLinks.length; i6++) {
      currentSlideLinks[i6].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 2)
  }

  slide4button.onclick = function () {
    pauseSlideshow()
    slides[currentSlide].classList.remove('active')
    const currentSlideLinks = slides[currentSlide].querySelectorAll('a')
    for (let i7 = 0; i7 < currentSlideLinks.length; i7++) {
      currentSlideLinks[i7].setAttribute('tabindex', -1)
    };
    goToSlide(currentSlide = 3)
  }
}
