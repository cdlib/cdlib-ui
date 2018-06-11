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
    sortButton1isPressed: true,
    sortButton2isPressed: false
  },
  methods: {
    toggle1: function(){
      this.isDisplayed = !this.isDisplayed
    },
    detectMediaQuery: function(alias, matches) {
      if (matches)
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
      this.showButton3isPressed = false
    },
    showButtonToggle2: function(){
      this.showButton2isPressed = true,
      this.showButton1isPressed = false,
      this.showButton3isPressed = false
    },
    showButtonToggle3: function(){
      this.showButton3isPressed = true,
      this.showButton1isPressed = false,
      this.showButton2isPressed = false
    },
    sortButtonToggle1: function(){
      this.sortButton1isPressed = true,
      this.sortButton2isPressed = false
    },
    sortButtonToggle2: function(){
      this.sortButton2isPressed = true,
      this.sortButton1isPressed = false
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
