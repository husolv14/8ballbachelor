<template>
  <div class="mainWrapper">
    <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid"
             @addNewFlow="addNewFlow" :FlowData="FlowData">
    </sidebar>
    <grid @createNewGrid="createNewGrid" @destroy="deleteTool" :state="state" :loading="loadingGrid" :ToolData="ToolPost"
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

      <el-select class="selected" v-model="value" placeholder="Velg verktøy">
        <el-option v-for="item in ToolList" :key="item.name" :label="item.name" :value="item.name">
        </el-option>
      </el-select>
      <div class="form" v-if="value === 'Mail'"><Mail></Mail></div>
      <div class="form" v-if="value === 'Vent'"><Vent></Vent></div>
      <div class="form" v-if="value === 'Gjenta'"><Gjenta></Gjenta></div>
      <div class="form" v-if="value=== 'Alarm'"><Alarm></Alarm></div>

    </el-dialog>
    <el-button class="button2" type="success" @click="getTool">Legg til nye verktøy</el-button>
    <!--<el-button class="refresh" type="info" icon="el-icon-refresh" @click="update(state)" circle></el-button>-->
    <el-button class="button3" type="success" @click="">Lagre løp</el-button>
    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
  import axios from 'axios'
  import Mail from '../forms/Mail'
  import Vent from '../forms/Vent'
  import Gjenta from '../forms/Gjenta'
  import Alarm from '../forms/Alarm'

  export default {
    name: 'main-wrapper',
    data() {
      return {
        FlowData: {},
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
      Mail,
      Vent,
      Gjenta,
      Alarm
    },
    methods: {
      createNewGrid(array) {
        // this.gridList.push(this.toolPost)
        // this.gridList.push(array)
        this.newGrid = true
        this.gridList = array
      },
      deleteTool(id) {
        console.log('Debug : MainWrapper - Delete from json with id : ' + id)
        axios.delete('http://localhost:3000/fl_wi_rel/' + id).then(response => {
          console.log(response.data)
        }).then(response =>{
          this.updateGrid(this.state, this.gridTitle)
        }).catch(e => {
          console.log(e)
        })
      },
      updateGrid(state, name) {
        // this.newGrid = false
        this.newGrid = false
        this.loadingGrid = true
        this.state = state
        this.gridTitle = name

        console.log("Debug : STATE = " + state)
        console.log("Debug : Updating Grid")
        axios.get(`http://localhost:3000/fl_wi_rel?widgetId=` + state)
          .then(response => {
            // JSON responses are automatically parsed.
            this.ToolPost = response.data
            console.log(response.data)
            this.loadingGrid = false
            this.gridCount = this.ToolPost.length
            this.$message({
              message: 'Hentet ' + this.gridCount + ' data fra tools.',
              type: 'success'
            });

          })
          .catch(e => {
            this.errors.push(e)
          })

      },


      getTool() {
        this.showModal = true
        axios.get(`http://localhost:3000/widget`)
          .then(response => {
            this.ToolList = response.data
          })
          .catch(e => {
            console.log(e)
          })
      },

      submitTool(tool) {

        axios.post(`http://localhost:3000/fl_wi_rel`, {
          name: tool,
          widgetId: this.state,
          order: this.gridCount + 1
        }).then(response => {
          this.updateGrid(this.state, this.gridTitle)
        })

        this.showModal = false
      },

      addNewFlow(formData) {
        axios.post(`http://localhost:3000/flow`, {
            name: formData.name,
            dbName: formData.dbName
          }
        )
          .then(response => {
            this.updateFlowList()
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.showModal = false
        this.$emit('UPDATE')
      },
      update(state) {
        console.log("Debug : NEW GRID = ")
        this.loadingGrid = true
        console.log('Debug : Update Grid')
        axios.get('http://localhost:3000/fl_wi_rel?widgetId=' + state).then(response => {
          this.ToolPost = response.data
          this.loadingGrid = false
        })
      },

        updateFlowList() {
          this.loadingSidebar = true
          console.log("Debug : UPDATING FLOW LIST")
          axios.get(`http://localhost:3000/flow`)
            .then(response => {
              // JSON responses are automatically parsed.
              this.FlowData = response.data
              this.loadingSidebar = false
            })
            .catch(e => {
              this.errors.push(e)
            })
          this.updateGrid(this.state, this.gridTitle)
        }
      },
      changeState(state) {

        this.state = state
        console.log("Debug : STATE IS FOLLOWING : " + this.state)
      },

      created() {
      this.updateFlowList()
      }
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
  /*.selected{*/
    /*margin-bottom: 25px;*/
  /*}*/
  .form{
    margin-top: 25px;
    width: 600px;
    position: relative;
    margin: auto;
    margin-bottom: 25px;
  }

</style>
