<template>
  <div class="mainWrapper">
    <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid" @updateList="updateList"
             @addNewWidget="addNewWidget" :WidgetData="WidgetData">
    </sidebar>
    <grid :loading="loadingGrid" :ToolData="ToolData"/>
    <el-dialog
      :title="name"
      :visible.sync="showModal"
      width="40%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal= false">Avbryt.</el-button>
        <el-button type="primary" @click="submitTool(value)">Lagre</el-button>
        </span>

      <el-select v-model="value" placeholder="Velg verktøy">
        <el-option v-for="item in ToolList" :key="item.name" :label="item.name" :value="item.name">
        </el-option>
      </el-select>
    </el-dialog>
    <el-button type="success" @click="getTool">Legg til nye verktøy</el-button>


    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
  import ApiFetch from './ApiFetch'
  import axios from 'axios'

  export default {
    name: 'main-wrapper',
    data() {
      return {
        WidgetData: {},
        showModal: false,
        ToolData: {},
        loadingGrid: false,
        loadingSidebar: false,
        ToolList:[],
        value: "",
        ToolPost:[],
        name: "Legg til flere verktøy",
      }
    },
    components: {
      Sidebar,
      Grid,
      ApiFetch
      //Modal
    },
    methods: {

      updateGrid(id) {
        this.loadingGrid = true
        console.log("Updating Grid")
        axios.get(`http://localhost:3000/ToolData?widgetId=` + id)
          .then(response => {
            // JSON responses are automatically parsed.
            this.ToolData = response.data
            console.log(response.data)
            this.loadingGrid = false
            this.$message({
              message: 'Hentet data fra tools.',
              type: 'success'
            });
          })
          .catch(e => {
            this.errors.push(e)
          })
      },

      getTool() {
        this.showModal = true
        axios.get(`http://localhost:3000/tooldata`)
          .then(response => {
            this.ToolList = response.data
          })
          .catch(e => {
            console.log(e)
          })
      },

      submitTool(tool){
        axios.get('http://localhost:3000/toolData?name=' + tool).then(response=> {
          this.ToolPost = response.data
          this.postTool(this.ToolPost)
        })
      },

      postTool(toolData){
        console.log('HER : '+ toolData)
        axios.post(`http://localhost:3000/toolData`, {
            toolData
          }
        )
          .then(response => {
          })
      },

      addNewWidget(formData) {
        axios.post(`http://localhost:3000/WidgetData`, {
            name: formData.name,
            dbName: formData.dbName
          }
        )
          .then(response => {
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.showModal = false
        this.$emit('UPDATE')
      },

      updateList() {
        this.loadingSidebar = true
        console.log("UPDATING LIST")
        axios.get(`http://localhost:3000/widgetData`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.WidgetData = response.data
            this.loadingSidebar = false
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },

    created() {
      this.loadingSidebar = true
      axios.get(`http://localhost:3000/widgetData`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.WidgetData = response.data
          this.loadingSidebar = false

        })
        .catch(e => {
          this.errors.push(e)
        })
    },


  }
</script>

<style scoped>
  .mainWrapper {
    height: 60em;
    background-color: #f0f3f5;
    width: auto;
  }

  h3 {
    position: relative;
  }
</style>
