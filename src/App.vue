<template>
  <div id="app">
    <main-wrapper/>
  </div>
</template>

<script>
  import MainWrapper from './components/MainWrapper'

  export default {
    name: 'App',
    components: {
      MainWrapper,
    },
    data() {
      return {
      }


    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family             : 'Avenir', Helvetica, Arial, sans -serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
  }
  body{
    background-color: #e4e5e6;
    margin: 0;
  }

</style>
