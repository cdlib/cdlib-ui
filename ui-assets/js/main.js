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

if (document.querySelector('.c-slideshow')) {

  var slides = document.querySelectorAll('.c-slideshow__slide figcaption');
  var firstSlide = document.querySelector('.c-slideshow figcaption');
  var currentSlide = 0;
  var transitionSpeed = 10000;
  var slideInterval = setInterval(nextSlide, transitionSpeed);
  var controls = document.querySelector('.c-slideshow__controls');
  var playButton = document.querySelector('.c-slideshow__play');
  var pauseButton = document.querySelector('.c-slideshow__pause');
  var slide1button = document.querySelector('.c-slideshow__slide1');
  var slide2button = document.querySelector('.c-slideshow__slide2');
  var slide3button = document.querySelector('.c-slideshow__slide3');
  var slide4button = document.querySelector('.c-slideshow__slide4');

  // initial states:  
  playButton.style.display = 'none';
  firstSlide.classList.add('active');

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
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

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  playButton.onclick = function() {
    playSlideshow();
    pauseButton.focus();
  };

  pauseButton.onclick = function() {
    pauseSlideshow();
    playButton.focus();
  };

  slide1button.onclick = function() {
    pauseSlideshow();
    slides[currentSlide].classList.remove('active');
    goToSlide(currentSlide = 0);
  };

  slide2button.onclick = function() {
    pauseSlideshow();
    slides[currentSlide].classList.remove('active');
    goToSlide(currentSlide = 1);
  };

  slide3button.onclick = function() {
    pauseSlideshow();
    slides[currentSlide].classList.remove('active');
    goToSlide(currentSlide = 2);
  };

  slide4button.onclick = function() {
    pauseSlideshow();
    slides[currentSlide].classList.remove('active');
    goToSlide(currentSlide = 3);
  };

};

// ***** Newsreel Component ***** //

if (document.querySelector('.c-newsreel')) {

  var items = document.querySelectorAll('.c-newsreel li');
  var firstItem = document.querySelector('.c-newsreel li:first-child');
  var currentItem = 0;
  var reelSpeed = 7000;
  var itemInterval = setInterval(nextItem, reelSpeed);
  var playControl = document.querySelector('.c-newsreel__play');
  var pauseControl = document.querySelector('.c-newsreel__pause');
  var tabControl = document.querySelector('.c-newsreel li a')

  // initial states:
  playControl.style.display = 'none';
  firstItem.className = 'active';

  function goToItem(n) {
    items[currentItem].removeAttribute('class');
    currentItem = (n + items.length) % items.length;
    items[currentItem].className = 'active';
  }

  function playNewsreel() {
    itemInterval = setInterval(nextItem, reelSpeed);
    playControl.style.display = 'none';
    pauseControl.style.display = 'inline-block';
  }

  function pauseNewsreel() {
    clearInterval(itemInterval);
    playControl.style.display = 'inline-block';
    pauseControl.style.display = 'none';
  }

  function nextItem() {
    goToItem(currentItem + 1);
  }

  playControl.onclick = function() {
    playNewsreel();
    pauseControl.focus();
  };

  pauseControl.onclick = function() {
    pauseNewsreel();
    playControl.focus();
  };

  tabControl.onfocus = function() {
    pauseNewsreel();
  }

};
