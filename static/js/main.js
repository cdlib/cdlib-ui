// Show/Hide Toggle and Media Queries //

new Vue({
  el: '#app',
  data: {
    isDisplayed: false
  },
  methods: {
    toggle1: function(){
      this.isDisplayed = !this.isDisplayed
    },
    detectMediaQuery: function(alias, matches) {
      if (matches)
        this.isDisplayed = false
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
