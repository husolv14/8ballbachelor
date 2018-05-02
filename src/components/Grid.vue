<template>
  <div class="grid">
    <div class="dragtitle">
      <div class="titleBar">
        <div class="titleText">{{gridTitle}}</div>
      </div>
      <div>
        <draggable v-loading="loading" class="drag" :options="{animation:180, group:'grid'}">
          <Tool class="item" @notConditional="notConditional" @isConditional="newDraggable" @destroy="destroy" v-for="item in ToolData" :key="item.key" :toolItem="item">
          </Tool>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import axios from 'axios'
  import Widget from "./Widget";
  import Tool from './Tool'

  export default {
    name: 'grid',
    data() {
      return {
        showModal: false,
        name: "Legg til flere verktøy",
        value: "",
        ToolList: {},


      }
    },
    components: {
      Widget,
      draggable,
      Tool
    },
    methods: {
      notConditional(){
        this.$emit('grid-notConditional')
      },
      newDraggable(array){
        this.$emit('createNewGrid' , array)
      },

      destroy(id) {
        console.log("DESTROY emit from grid with id : " + id)
        this.$emit('destroy', id)
      }
    },
    props: [
      'ToolData', 'loading','gridTitle'
    ],
    created() {
    }

  }

</script>

<style scoped>
  .grid {
    /*display: inline-block;*/
    min-width: 80%;
    /*overflow:hidden;*/
    margin-left: 14%;
  }

  li {
    opacity: 1;
  }

  .drag {
    list-style: none;
    min-height: 225px;
    background-color: #FFF;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow-x: auto;
    min-width: 80%;
  }

  h3 {
    width: 10%;
  }

  .titleBar {
    background-color: rgb(240, 243, 245);
    float: top;
    height: 40px;
    margin-left: 30px;
    margin-right: 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .titleText {
    text-align: left;
    padding-top: 10px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 1%;
  }

  .dragtitle{
    width: 100%;
    padding-top: 20px;
  }
</style>
