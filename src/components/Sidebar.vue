<template>
  <div class="Sidebar">
    <!--<widget/>-->
    <div></div>
    <api-fetch/>
  </div>
</template>

<script>
 // import Widget from '../components/Widget.vue'
  import ApiFetch from './ApiFetch'

  export default {
    name: 'Sidebar',
    components: {
      //Widget,
      ApiFetch
    }
  }

</script>

<style scoped>
  .Sidebar {
    width: auto;
    background-color: #a4b7c1;
    height: 100%;
    color: white;
    position: relative;
    float: left;
    overflow-y: scroll;
  }
</style>
