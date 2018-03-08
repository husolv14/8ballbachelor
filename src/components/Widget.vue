<template>
  <!--<ListGenerator :thisProp="widgetData"></ListGenerator>-->
  <draggable
    :options="{animation:150,group:{name: 'grid', pull: 'clone', put:false},multipleDropzonesItemsDraggingEnabled: true}" class="list">
  <div draggable="false" @dblclick="showModal=true" @dbclick="showModal= true" class="item">
    {{widgetItem.name}}
    <br><img class="icon" :src="widgetItem.icon"/>
    <div v-if="showModal">
      <Modal :test="widgetItem"></Modal>
    </div>
  </div>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'
  import ListGenerator from './ListGenerator'
  import Modal from './Modal'

  export default {
    name: "widget",
    data() {
      return {
        // widgetData: [],
        // errors: [],
        showModal: false
      }
    },

    components: {
      draggable,
      ListGenerator,
      Modal
    },
    props: [
      'widgetItem'
    ]
  }
</script>

<style scoped>
  .icon {
    height: 120px;
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .item {
    /*border: 2px solid black;*/
    height: 156.55px;
    text-align: center;
    margin: 2px;
    min-width: 233.78px;
    margin: 20px 10px 10px 10px;
    background-color: #f0f3f5;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
    color: black;
  }
  .list {
    list-style: none;
    text-align: center;
    text-decoration: none;
    color: black;
    padding: 0;
    display: inline;
    animation: 400ms;
    min-height: 100%;

  }
</style>
