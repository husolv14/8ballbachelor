<template>
  <div class="grid">
    <div class="dragtitle">
      <div class="titleBar">
        <div class="titleText">{{gridTitle}}</div>
      </div>
      <div>
        <draggable v-model="ToolData" v-loading="loading" class="drag" :options="{animation:130, group:'grid', scroll: true}">
            <Tool @rundata="runData" :run='run' class="item" @isConditional="newDraggable" @destroy="destroy" v-for="(item, index) in ToolData" :key="index" :toolItem="item" :index="index +1">
          </Tool>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import axios from 'axios'
  import Widget from "./Flow";
  import Tool from './Tool'

  export default {
    name: 'grid',
    data() {
      return {
        showModal: false,
        name: "Legg til flere verktøy",
        value: "",
        ToolList: {},

        thisThing: [],
        list1:[],
        newCreate: true
      }
    },
    components: {
      Widget,
      draggable,
      Tool
    },
    // computed:{
    //   orderedArray: function () {
    //       return  _.orderBy(this.ToolData, 'order')
    //   }
    // },
    methods: {
      doThis(){
        console.log('runs')
      },
      notConditional(){
        this.$emit('grid-notConditional')
      },
      newDraggable(array){
        this.$emit('createNewGrid' , array)
      },

      destroy(id) {
        console.log("DESTROY emit from grid with id : " + id)
        this.$emit('destroy', id)
      },
      runData(form, item, index){
        this.$emit('rundata', form, item, index)
      }
    },
    props: [
      'ToolData', 'loading','gridTitle', 'state', 'run'
    ],
    created() {
      this.ToolList = this.ToolData
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

  .drag {
    min-height: 170px;
    background-color: #FFF;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow-x: auto!important;
    /*min-width: 80%;*/
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
    padding-left: 10px;
  }
  .help{

  }
</style>
