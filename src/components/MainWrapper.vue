<template>
  <div class="mainWrapper">
    <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid" @updateList="updateList"
             @addNewWidget="addNewWidget" :WidgetData="WidgetData">
    </sidebar>
    <grid @createNewGrid="createNewGrid" @destroy="deleteTool" :loading="loadingGrid" :ToolData="ToolPost"
          :gridTitle="gridTitle"/>
    <grid v-if="newGrid" :ToolData="gridList" :grid-title="gridTitle + ' conditional'"/>
    <el-dialog
      :title="name"
      :visible.sync="showModal"
      width="40%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal= false">Avbryt</el-button>
        <el-button type="primary" @click="submitTool(value)">Lagre</el-button>
        </span>

      <el-select v-model="value" placeholder="Velg verktøy">
        <el-option v-for="item in ToolList" :key="item.name" :label="item.name" :value="item.name">
        </el-option>
      </el-select>
    </el-dialog>
    <el-button class="button2" type="success" @click="getTool">Legg til nye verktøy</el-button>
    <el-button class="refresh" type="info" icon="el-icon-refresh" @click="update(state)" circle></el-button>
    <el-button class="button3" type="success" @click="">Lagre løp</el-button>
    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
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
        ToolList: [],
        value: "",
        ToolPost: [],
        name: "Legg til flere verktøy",
        gridCount: 0,
        state: "",
        gridList: {},
        newGrid: false,
        gridTitle: "Drag and Drop"
      }
    },
    components: {
      Sidebar,
      Grid,
    },
    methods: {
      createNewGrid(array) {
        // this.gridList.push(this.toolPost)
        // this.gridList.push(array)
        this.newGrid = true
        this.gridList = array
      },
      deleteTool(id) {
        console.log('MainWrapper - Delete from json with id : ' + id)
        axios.delete('http://localhost:3000/runData/' + id).then(response => {
          console.log(response.data)
        }).catch(e => {
          console.log(e)
        })
      },
      updateGrid(id, name) {
        // this.newGrid = false
        this.newGrid = false
        this.loadingGrid = true
        this.state = id
        this.gridTitle = name

        console.log("STATE = " + id)
        console.log("Updating Grid")
        axios.get(`http://localhost:3000/runData?widgetId=` + id)
          .then(response => {
            // JSON responses are automatically parsed.
            this.ToolPost = response.data
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

      submitTool(tool) {

        axios.post(`http://localhost:3000/runData`, {
          name: tool,
          widgetId: this.state
        })
        this.showModal = false
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
      update(id) {
        console.log("NEW GRID = ")
        this.loadingGrid = true
        console.log('Update Grid')
        axios.get('http://localhost:3000/runData?widgetId=' + id).then(response => {
          this.ToolPost = response.data
          this.loadingGrid = false
        })
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
    changeState(id) {

      this.state = id
      console.log("STATE IS FOLLOWING : " + this.state)
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
    height: 58em;
    background-color: rgb(228, 229, 230);
    width: auto;
    overflow: hidden;
  }

  h3 {
    position: relative;
  }

  .button2 {
    background-color: rgb(32, 168, 216);
    border: 0px;
    border-radius: 0px;
  }

  .button3 {
    float: right;
    margin-right: 25px;
  }

</style>
