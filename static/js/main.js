// Show/Hide Toggle //

new Vue({
  el: '#app',
  data: {
    isDisplayed: false
  },
  methods: {
    toggle1: function(){
      this.isDisplayed = !this.isDisplayed
    }
  }
})
