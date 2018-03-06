<template>
  <div>
    <div class="titleBar">
      <div class="titleText">A beautiful title of the tool you are using, or something..</div>
    </div>
    <ul>
      <draggable :list="list" class="drag" :options="{animation:150,group:'grid',clone:clone}">
      </draggable>
    </ul>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'grid',
    components: {
      draggable
    },
  }

</script>

<style scoped>
  li {
    opacity: 0;
  }

  .drag {
    width: 80%;
    float: left;
    list-style: none;
    display: inline-flex;
    min-height: 450px;
    background-color: #FFF;
    margin-top: 20px;
    margin-left: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow-x: scroll;
  }

  h3 {
    width: 10%;
  }

  .titleBar {
    background-color: white;
    height: 60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .titleText {
    text-align: left;
    padding-top: 21px;
    font-size: 20px;
  }

</style>
