<template>
  <div class="mainWrapper">
    <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid"
             @addNewFlow="addNewFlow" :FlowData="FlowData" @editFlow="editFlow">
    </sidebar>
    <grid @rundata="runData" @createNewGrid="createNewGrid" @destroy="deleteTool" :state="state" :loading="loadingGrid"
          :ToolData="orderedArray"
          :gridTitle="gridTitle"
          :run="run"
    />
    <grid v-if="newGrid" :ToolData="gridList" :grid-title="gridTitle + ' conditional'"/>
    <el-dialog
      :title="name"
      :visible.sync="showModal"
      width="40%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitTool(value)">Lagre</el-button>
        <el-button @click="showModal= false">Avbryt</el-button>
        </span>

      <el-select class="selected" v-model="value" placeholder="Velg verktøy">
        <el-option v-for="item in ToolList" :key="item.name" :label="item.name" :value="item.name">
        </el-option>
      </el-select>
      <div class="form" v-if="value === 'Mail'">
        <Mail></Mail>
      </div>
      <div class="form" v-if="value === 'Vent'">
        <Vent></Vent>
      </div>
      <div class="form" v-if="value === 'Gjenta'">
        <Gjenta></Gjenta>
      </div>
      <div class="form" v-if="value=== 'Alarm'">
        <Alarm></Alarm>
      </div>

    </el-dialog>
    <el-dialog
      :title="editedFlow.name"
      :visible.sync="showEditModal"
      width="40%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="storeEdit(editedFlow)">Lagre</el-button>
        <el-button @click="showEditModal = false">Avbryt</el-button>
        <el-popover
          placement="top"
          width="160"
          v-model="showSure">
            <div>Er du sikker?<br> </div>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="showSure = false">Avbryt</el-button>
                <el-button type="danger" size="mini" @click="deleteFlow(editedFlow.id)">Bekreft</el-button>
              </div>
              <el-button class="del" type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
            </el-popover>
      </span>
      <el-form>
        <el-form-item :label="'Endre navn på løpet'">
          <el-input v-model="editedFlow.name">
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div>
      <el-button class="button3" type="success" @click="runFlow()">Lagre løp</el-button>
      <el-button class="button2" type="success" @click="getTool">Legg til nye verktøy</el-button>
    </div>

    <el-dialog
      :title="'Output'"
      :visible.sync="showRunModal"
      width="40%"
    >
      <div v-for="item in dataForm">{{item}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showRunModal = false">Lukk</el-button>
        </span>
    </el-dialog>

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
        gridTitle: "Drag and Drop",
        editedFlow: {},
        showEditModal: false,
        showSure: false,
        delay: 100,
        timer: null,
        clicks: 0,
        showRunModal: false,
        run: false,
        runArray: [],
        editForm: [
          {name: ""}
        ],
        dataForm:[]
      }
    },
    computed: {
      orderedArray: function () {
        return _.orderBy(this.ToolPost, 'order')
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
        this.newGrid = true
        this.gridList = array
      },
      deleteTool(id) {
        console.log('Debug : MainWrapper - Delete from json with id : ' + id)
        axios.delete('http://localhost:3000/fl_wi_rel/' + id).then(response => {
          console.log(response.data)
        }).then(response => {
          this.updateGrid(this.state, this.gridTitle)
        }).catch(e => {
          console.log(e)
        })
      },
      deleteFlow(id) {
        axios.delete('http://localhost:3000/fl_wi_rel/', {data: {widgetId: id}}).then(response => {
        })
        axios.delete('http://localhost:3000/flow/' + id).then(response => {
          this.updateFlowList()
          this.showSure = false
          this.showEditModal = false
          this.updateGrid()

        })
      },
      editFlow(id) {
        axios.get('http://localhost:3000/flow?id=' + id).then(response => {
          this.editedFlow = response.data[0]
          this.showEditModal = true
        }).catch(error => {
          this.$notify({
            message: 'There was an error ' + error,
            type: 'error',
            duration: 1500
          });
        })
      },
      storeEdit(editedFlow) {
        axios.put('http://localhost:3000/flow/' + editedFlow.id, {
          name: editedFlow.name
        }).then(response => {
          console.log(response)
          this.updateFlowList()
          this.showEditModal = false
          this.gridTitle = editedFlow.name
        }).catch(error => {
          console.log(error)
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
            //console.log(response.data)
            this.loadingGrid = false
            this.gridCount = this.ToolPost.length
            if (this.gridCount) {
              this.$notify({
                message: 'Hentet ' + this.gridCount + ' widgets.',
                type: 'success',
                duration: 1500
              });
            }

          })
          .catch(error => {
            this.$notify({
              message: 'There was an error ' + error,
              type: 'error',
              duration: 1500
            });
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
            name: formData.name
          }
        )
          .then(response => {
            this.updateFlowList()
          })
          .catch(error => {
            this.$notify({
              message: 'There was an error ' + error,
              type: 'error',
              duration: 1500
            });
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
          .catch(error => {
            this.$notify({
              message: 'There was an error ' + error,
              type: 'error',
              duration: 1500
            });
          })
        this.updateGrid(this.state, this.gridTitle)
      },
      changeState(state) {

        this.state = state
        console.log("Debug : STATE IS FOLLOWING : " + this.state)
      },

      runFlow(array) {
        this.showRunModal = true
        this.run = true
      },
      runData(flow, item, index){
        this.dataForm.push(item, flow)
        this.dataForm.push(index)
        //this.dataForm[index] = flow
        // this.dataForm[] = item
        // this.dataForm[2] = index
        console.log("HER : " + item)
        this.run = false

      }
    },



    created() {
      this.updateFlowList()
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
    float: right;
    position: relative;
    margin-right: 25px;
    height: 40px;
  }

  .button3 {
    float: right;
    margin-right: 25px;
  }

  .form {
    margin-top: 25px;
    width: 600px;
    position: relative;
    margin: auto;
    margin-bottom: 25px;
  }

  .del {
    margin-left: 15px;
  }
  .output{
  }

</style>
