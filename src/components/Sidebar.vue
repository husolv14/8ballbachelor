<template>
  <div v-loading="loading" class="Sidebar">
    <div>
      <el-popover
        placement="right-start"
        width="200"
        trigger="hover">
        <p style="text-align: center;">
          Dobbeltklikk for å endre/slette <br>
          Klikk for å hente løpet
        </p>
        <el-button slot="reference" circle class="help el-icon-question" ></el-button>

      </el-popover>

      <h1 class="title">Løp</h1>

    </div>
    <!--<api-fetch v-model="FlowData"></api-fetch>-->
    <div  v-model="FlowData" v-for="item in FlowData">
      <Flow @editFlow="editFlow" @updateGrid="updateGrid" :FlowItem="item"></Flow>
    </div>
    <div>
      <el-button class="button" type="primary" @click="showModal = true" >{{name}} <i class="el-icon-plus"></i></el-button>
      <el-dialog
        :title="name"
        :visible.sync="showModal"
        width="40%"
      >
        <span slot="footer" class="dialog-footer">
        <el-button @click="close">Avbryt</el-button>
        <el-button type="primary" @click="postWidget(formData)">Legg Til</el-button>
        </span>
        <el-form>
          Navn
          <el-input v-model="formData.name"></el-input>
          <br/>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import Widget from '../components/Widget.vue'
import Flow from './Flow'

export default {
  name: 'Sidebar',
  data () {
    return {
      id: '',
      name:"Legg til nytt løp",
      showModal: false,
      formData: {
        name: ''
      },
      loading: false
    }
  },
  components: {
    Flow
  },
  created () {
  },
  methods: {
    close () {
      return this.showModal = false
    },
    postWidget (formData) {
      this.$emit('addNewFlow', formData)
      this.close()
    },
    update () {
      this.$emit('updateFlowList')
    },
    updateGrid (id,name) {
      console.log('Debug : DETTE ER id ' + id)
      this.$emit('sidebar-UpdateGrid', id, name)
    },
    editFlow(id){
      this.$emit('editFlow',id)
    }
  },
  props: ['FlowData']
}

</script>

<style scoped>
  .Sidebar {
    width: auto;
    min-width: 270.77px;
    background-color: rgb(41, 54, 61);
    height: 100%;
    color: white;
    position: relative;
    float: left;
    overflow-y: auto;
  }
  .refresh{
    margin-top: 10%;
    background-color: #29363d ;
  }
  .button{
    width: 100%;
    background-color: rgb(32, 168, 216);
    border: 0px;
    border-radius: 0px;
    text-align: left;
    padding-left: 40px;
  }

  .title{
    background-color: rgb(33, 43, 49);
    text-align: left;
    padding-left: 40px;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 0px;
  }
  .help{
    margin-top: 5px;
    margin-right: 5px;
    float: right;
    position: relative;
    background-color: rgb(33, 43, 49);
    border:0;
  }

</style>
