<template>
  <div class="mainWrapper">
    <sidebar/>
    <grid/>
    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
  //import Modal from '../components/Modal'
  export default {
    name: 'main-wrapper',
    components: {
      Sidebar,
      Grid
      //Modal
    }
  }
</script>

<style scoped>
  .mainWrapper {
    height: 53em;
    background-color: #f0f3f5;
  }

  h3 {
    position: relative;
  }
</style>
