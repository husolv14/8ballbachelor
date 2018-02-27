<template>
  <div class="Sidebar">
    <list-generator/>
  </div>
</template>

<script>
  import ListGenerator from '../components/ListGenerator.vue'

  export default {
    name: 'Sidebar',
    components: {
      ListGenerator
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
