// Show/Hide Toggle and Media Queries //

new Vue({
  el: '#app',
  data: {
    isDisplayed: false,
    isOpen1: false,
    isOpen2: false,
    showButton1isPressed: true,
    showButton2isPressed: false,
    showButton3isPressed: false,
    showButton4isPressed: false,
    sortButton1isPressed: true,
    sortButton2isPressed: false
  },
  methods: {
    toggle1: function(){
      this.isDisplayed = !this.isDisplayed
    },
    detectMediaQuery: function(alias, matches) {
      if (matches)
        this.isDisplayed = true
      else
        this.isDisplayed = false
    },
    headerToggle1: function(){
      this.isOpen1 = true
    },
    headerToggle2: function(){
      this.isOpen1 = false
    },
    headerToggle3: function(){
      this.isOpen2 = !this.isOpen2
    },
    detectMediaQuery2: function(alias, matches) {
      if (matches)
        this.isOpen1 = true,
        this.isOpen2 = true
      else
        this.isOpen1 = false,
        this.isOpen2 = false
    },
    showButtonToggle1: function(){
      this.showButton1isPressed = true,
      this.showButton2isPressed = false,
      this.showButton3isPressed = false,
      this.showButton4isPressed = false
    },
    showButtonToggle2: function(){
      this.showButton1isPressed = false,
      this.showButton2isPressed = true,
      this.showButton3isPressed = false,
      this.showButton4isPressed = false
    },
    showButtonToggle3: function(){
      this.showButton1isPressed = false,
      this.showButton2isPressed = false,
      this.showButton3isPressed = true,
      this.showButton4isPressed = false
    },
    showButtonToggle4: function(){
      this.showButton1isPressed = false,
      this.showButton2isPressed = false,
      this.showButton3isPressed = false,
      this.showButton4isPressed = true
    },
    sortButtonToggle1: function(){
      this.sortButton1isPressed = true,
      this.sortButton2isPressed = false
    },
    sortButtonToggle2: function(){
      this.sortButton1isPressed = false,
      this.sortButton2isPressed = true
    }
  },
  mq: {
    screen1: '(min-width: 480px)',
    screen2: '(min-width: 760px)',
    screen3: '(min-width: 870px)',
    screen4: '(min-width: 1280px)',
    screen5: '(min-width: 1400px)'
  }
})

// ***** Slideshow Component ***** //

var slideshowExists = document.querySelector('.c-slideshow');

if (slideshowExists){

  var slides = document.querySelectorAll('.c-slideshow .c-slideshow__slide');
  var currentSlide = 0;
  var transitionSpeed = 5000;
  var slideInterval = setInterval(nextSlide, transitionSpeed);
  var controls = document.querySelector('.c-slideshow__controls');
  var prevButton = document.querySelector('.c-slideshow__controls-previous');
  var playButton = document.querySelector('.c-slideshow__controls-play');
  var pauseButton = document.querySelector('.c-slideshow__controls-pause');
  var nextButton = document.querySelector('.c-slideshow__controls-next');

  controls.style.display = 'flex'; // unhides controls if there's JS
  playButton.style.display = 'none'; // initial play button state

  function goToSlide(n) {
    slides[currentSlide].className = 'c-slideshow__slide';
    currentSlide = (n + slides.length) %slides.length;
    slides[currentSlide].className = 'c-slideshow__slide active';
  }

  function playSlideshow() {
    slideInterval = setInterval(nextSlide, transitionSpeed);
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  }

  function pauseSlideshow() {
    clearInterval(slideInterval);
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  prevButton.onclick = function() {
    pauseSlideshow();
    previousSlide();
  };

  playButton.onclick = function() {
    playSlideshow();
    pauseButton.focus();
  };

  pauseButton.onclick = function() {
    pauseSlideshow();
    playButton.focus();
  };

  nextButton.onclick = function() {
    pauseSlideshow();
    nextSlide();
  };

};
