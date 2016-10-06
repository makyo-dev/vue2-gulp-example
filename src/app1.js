import Vue from 'vue'

Vue.component('txt', require('./components/text.vue'))

const app = new Vue({
  delimiters: ['[',']'],
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    clickButton() {
      this.message = 'page 1'
    }
  }
})
