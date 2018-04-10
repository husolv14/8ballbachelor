<template>
  <div class="grid">
    <div class="titleBar">
      <div class="titleText">Drag & Drop</div>
    </div>
    <!--<ul>-->
    <draggable v-loading="loading" class="drag" :options="{animation:150, group:'grid'}">
      <Tool @destroy="destroyTool()" v-for="item in ToolData" :key="item.key" :widgetItem="item">
      </Tool>
    </draggable>

    <!--</ul>-->
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
        ToolList: {}

      }
    },
    components: {
      Widget,
      draggable,
      Tool
    },
    methods: {
      placeOnGrid(value) {
        alert(value)
      },
      getTool() {
        axios.get(`http://localhost:3000/tooldata`)
          .then(response => {
            this.ToolList = response.data
          })
          .catch(e => {
            console.log(e)
          })
      },
      destroyTool() {
        console.log("DESTROY")
        this.$destroy()
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
    width: auto;
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

  .titleBar {
    background-color: #f0f3f5;
    height: 60px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .titleText {
    text-align: left;
    padding-top: 21px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 1%;
  }

</style>
