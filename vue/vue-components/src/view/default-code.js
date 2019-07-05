const code = 
  `<template>
    <div>
      <input v-model="message">{{message}}</input>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          message: ''
        }
      }
    }
  </script>`

  export default code
