<template>
  <div class="Sidebar">
    <el-button icon="el-icon-refresh" @click="updateList"></el-button>
    <!--<api-fetch v-model="WidgetData"></api-fetch>-->
    <div v-model="widgetData" v-for="item in widgetData">
      <Widget :widgetItem="item"></Widget>
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
  import axios from 'axios'
  import Widget from './Widget'

  export default {
    name: 'Sidebar',
    data() {
      return {
        showModal: false,
        name: "Legg til nytt løp",
        widgetData:{},
        formData: {
          name: "",
          dbName:""
        }
      }
    },
    components: {
      Widget,
      ApiFetch,
      Modal
    },
    created(){
      axios.get(`http://localhost:3000/widgetData`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.widgetData = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      close() {
        return this.showModal = false
      },
      postWidget(formData) {
        axios.post(`http://localhost:3000/WidgetData`, {
            name : formData.name,
            dbName: formData.dbName
          }
        )
          .then(response => {
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.showModal=false
        this.$emit('UPDATE')
      },
      updateList(){
        console.log("UPDATING LIST")
        axios.get(`http://localhost:3000/widgetData`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.widgetData = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      props:['WidgetData']

    }
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
