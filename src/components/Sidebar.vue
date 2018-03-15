<template>
  <div class="Sidebar">
    <widget/>
    <div></div>
    <render-widget/>
  </div>
</template>

<script>
 import Widget from '../components/Widget.vue'
  import RenderWidget from './RenderWidget'

  export default {
    name: 'Sidebar',
    components: {
      Widget,
      RenderWidget
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
    min-width: 20%;
  }
</style>
