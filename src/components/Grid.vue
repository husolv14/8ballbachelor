<template>
  <div class="grid">
    <div>
    <draggable v-loading="loading" class="drag" :options="{animation:150, group:'grid'}">
      <Tool @notConditional="notConditional" @isConditional="newDraggable" @destroy="destroy" v-for="item in ToolData" :key="item.key" :toolItem="item">
      </Tool>
    </draggable>
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
      'ToolData', 'loading'
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
    width: auto;
    list-style: none;
    min-height: 225px;
    background-color: #FFF;
    margin-top: 20px;
    margin-left: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow-x: scroll;
    min-width: 80%;

  }

  h3 {
    width: 10%;
  }

</style>
