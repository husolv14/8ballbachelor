<template>
    <div class="grid">
        <div class="titleBar">
            <div class="titleText">Legg til nye verktøy <el-button icon="el-icon-plus" type="info" circle @click="getTool(); showModal=true"></el-button></div>
        </div>
        <!--<ul>-->
            <draggable v-loading="loading" class="drag" :options="{animation:150, group:'grid'}">

              <Tool @create-form="createForm" @destroy="destroyTool()" v-for="item in ToolData" :widgetItem="item">
                </Tool>
            </draggable>

        <!--</ul>-->
        <el-dialog
                :title="name"
                :visible.sync="showModal"
                width="40%"
        >
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal= false">Avbryt.</el-button>
        <el-button type="primary" @click="placeOnGrid(value)">Lagre</el-button>
        </span>

            <el-select v-model="value" placeholder="Velg verktøy">
                <el-option v-for="item in ToolList" :key="item.name" :label="item.name" :value="item.name">{{item.name}}
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
    import Tool from './Tool'
    import Delay from 'vue-delay'


    export default {
        name: 'grid',
        data() {
            return {
                showModal: false,
                name: "Legg til flere verktøy",
                value: "",
              ToolList:{}

            }
        },
        components: {
            Widget,
            Modal,
            draggable,
            ToolFetch,
            Tool,
            Delay
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
          destroyTool(){
              console.log("DESTROY")
            this.$destroy()
          },
            createForm(form){
                this.$emit('grid-create-form', form)
            }
        },
        props: [
            'ToolData','loading'
        ],
        created() {
        }

    }

</script>

<style scoped>
  .grid{
    display: inline-block;
    min-width: 80%;
    width: auto;
    /*overflow:hidden;*/
    left: 0;
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
        /*overflow-x: scroll;*/
        min-width: 100%;


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
        padding-top: 15px;
        font-size: 20px;
        font-weight: bold;
      margin-left: 1%;
    }
  .newTools{
    bottom:0;
  }
  .sortable-ghost{
    opacity:1;
  }
  .tryThis{
    background-color:red;
  }

</style>
