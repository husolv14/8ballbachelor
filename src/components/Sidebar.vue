<template>
  <div class="Sidebar">
    <h2>Sidebar</h2>
     <listGenerator/>
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
.Sidebar{
width:18%;
  background-color:#29363d;
  height: 100%;
  color:white;
  position:relative;
  float:left;
}
</style>
