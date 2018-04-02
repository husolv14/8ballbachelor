<!-- Der widgets plasseres -->

<template>
  <div>
    <div class="titleBar">
      <div class="titleText">8BallBachelor</div>
    </div>
    <ul>
      <draggable class="drag" :options="{animation:150,group:'grid'}">
        <Widget v-for="item in ToolData":widgetItem = "ToolData"></Widget>
      </draggable>

    </ul>
    <el-button type="success" @click="getTool(); showModal=true">Legg til nye verktøy</el-button>
    <el-dialog
      :title="name"
      :visible.sync="showModal"
      width="40%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal= false">Avbryt</el-button>
        <el-button type="primary" @click="placeOnGrid(value)">Lagre</el-button>
        </span>

      <el-select v-model="value" placeholder="Velg verktøy">
        <el-option v-for="item in ToolData" :key="item.name" :label="item.name" :value="item.name">{{item.name}}
        </el-option>
      </el-select>
    </el-dialog>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import Modal from "./Modal"
  import axios from 'axios'
  import Widget from "./Widget";
  import ToolFetch from './ToolFetch'


  export default {
    name: 'grid',
    data() {
      return {
        showModal: false,
        name: "Legg til flere verktøy",
        value: "",
      }
    },
    components: {
      Widget,
      Modal,
      draggable,
      ToolFetch
    },
    methods: {
      placeOnGrid(value) {
        alert(value)
      },
      getTool() {
        alert("yo")
        axios.get(`http://localhost:3000/tool`)
          .then(response => {
            this.ToolData = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
        // console.log("we got there")
        // console.log(Vue.http.get('localhost:3000/tool').then(this.response))

      }
    },
      props:[
          'ToolData'
      ],
    created() {
    }

  }

</script>

<style scoped>
  li {
    opacity: 1;
  }

  .drag {
    width: auto;
    float: left;
    list-style: none;
    display: inline-flex;
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
    background-color: white;
    height: 60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .titleText {
    text-align: left;
    padding-top: 21px;
    font-size: 20px;
    margin-left: 15%;
    font-weight: bold;
  }

</style>
