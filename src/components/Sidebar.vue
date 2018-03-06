<template>
  <div class="Sidebar">
    <widget/>
  </div>
</template>

<script>
  import Widget from '../components/Widget.vue'

  export default {
    name: 'Sidebar',
    components: {
      Widget
    }
  }

</script>

<style scoped>
  .Sidebar {
    width: 18%;
    background-color: #a4b7c1;
    height: 100%;
    color: white;
    position: relative;
    float: left;
    overflow: scroll;
  }
</style>
