<template>

  <ul>
    <draggable class= "drag" :options="{animation:50,group:'grid',clone:clone}">
      <li>1</li>
      <li>2</li>
    </draggable>
    <api-fetch/>
  </ul>

</template>

<script>
  import draggable from 'vuedraggable'
  import ApiFetch from './ApiFetch'
export default {
  name: 'grid',
  components: {
    draggable,
    //ApiFetch
  }
}

</script>

<style scoped>
  li{
    opacity: 0;
  }
  .drag{
    width: 80%;
    float:left;
    list-style: none;
    display:inline-flex;
  }
  h3{
    width: 10%;
  }

</style>
