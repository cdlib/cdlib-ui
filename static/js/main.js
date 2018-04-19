// Show/Hide Toggle and Media Queries //

new Vue({
  el: '#app',
  data: {
    isDisplayed: false,
    isOpen1: false,
    isOpen2: false
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
  },
  mq: {
    screen1: '(min-width: 480px)',
    screen2: '(min-width: 760px)',
    screen3: '(min-width: 870px)',
    screen4: '(min-width: 1280px)',
    screen5: '(min-width: 1400px)'
  }
})
