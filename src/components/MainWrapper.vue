<template>
  <div class="mainWrapper" >
    <sidebar @sidebar-UpdateGrid="updateGrid" @updateList="updateList" @addNewWidget="addNewWidget" :WidgetData="WidgetData">
    </sidebar>
    <grid :ToolData="ToolData"/>
    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
  //import Modal from '../components/Modal'
  import ApiFetch from './ApiFetch'
  import axios from 'axios'
  export default {
    name: 'main-wrapper',
    data(){
      return{
        WidgetData:{},
        ToolData:{}
      }
    },
    components: {
      Sidebar,
      Grid,
      ApiFetch
      //Modal
    },
    methods:{
        updateGrid(){
            console.log("Updating Grid")
            axios.get(`http://localhost:3000/widgetData`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.ToolData = response.data
                    console.log(response.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
      addNewWidget(formData){
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
            this.WidgetData = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
    created(){
      axios.get(`http://localhost:3000/widgetData`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.WidgetData = response.data

        })
        .catch(e => {
          this.errors.push(e)
        })
    },


  }
</script>

<style scoped>
  .mainWrapper {
    height: 53em;
    background-color: #f0f3f5;
  }

  h3 {
    position: relative;
  }
</style>
