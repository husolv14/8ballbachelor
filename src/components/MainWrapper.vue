<template>
<div class = "mainBox">
<sidebar/>
<grid/>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Grid from '../components/grid'
export default {
  name: 'main-wrapper',
  components: {
    Sidebar,
    Grid
  }
}
</script>

<style scoped>
.mainBox{
  height: 40em;
  background-color: #f0f3f5;
}
  h3{
    position: relative;
  }
</style>
