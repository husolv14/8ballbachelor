<template>
  <div v-loading="loading" class="Sidebar">
    <el-button icon="el-icon-refresh" @click="update"></el-button>
    <!--<api-fetch v-model="WidgetData"></api-fetch>-->
    <div  v-model="widgetData" v-for="item in WidgetData">
      <Widget @updateGrid="updateGrid" :widgetItem="item"></Widget>
    </div>
    <div>
      <el-button @click="showModal = true" type="primary">Legg til flere widgets</el-button>
      <el-dialog
        :title="name"
        :visible.sync="showModal"
        width="40%"
      >
        <span slot="footer" class="dialog-footer">
        <el-button @click="close">Avbryt</el-button>
        <el-button type="primary" @click="postWidget(formData)">Lagre</el-button>
        </span>
        <el-form>
          Navn
          <el-input v-model="formData.name"></el-input>
          Database navn
          <el-input v-model="formData.dbName"></el-input>
          <!--<el-select>-->
            <!--<el-option>-->

            <!--</el-option>-->
          <!--</el-select>-->
          <br/>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // import Widget from '../components/Widget.vue'
  import ApiFetch from './ApiFetch'
  import Modal from './Modal'
  import Widget from './Widget'

  export default {
    name: 'Sidebar',
    data() {
      return {
          id:"",
        showModal: false,
        name: "Legg til nytt løp",
        widgetData:{},
        formData: {
          name: "",
          dbName:""
        },
          loading:false
      }
    },
    components: {
      Widget,
      ApiFetch,
      Modal
    },
    created(){
    },
    methods: {
      close() {
        return this.showModal = false
      },
      postWidget(formData) {
        this.$emit("addNewWidget", formData)
        this.close()
      },
      update(){
        this.$emit("updateList")
      },
        updateGrid(id){
          console.log("DETTE ER id " + id)
          this.$emit("sidebar-UpdateGrid", id)
        }
    },
    props:['WidgetData']
  }

</script>

<style scoped>
  .Sidebar {
    width: auto;
    min-width: 270.77px;
    background-color: #a4b7c1;
    height: 100%;
    color: white;
    position: relative;
    float: left;
    overflow-y: scroll;
  }
</style>
