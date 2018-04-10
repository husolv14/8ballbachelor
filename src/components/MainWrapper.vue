<template>
  <div class="mainWrapper" >
    <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid" @updateList="updateList" @addNewWidget="addNewWidget" :WidgetData="WidgetData">
    </sidebar>
    <grid :loading="loadingGrid" :ToolData="ToolData"/>
    <!--modal/-->
  </div>

</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Grid from '../components/Grid'
  import axios from 'axios'
  export default {
    name: 'main-wrapper',
    data(){
      return{
        WidgetData:{},
        ToolData:{},
          loadingGrid: false,
          loadingSidebar:false,
      }
    },
    components: {
      Sidebar,
      Grid,
    },
    methods:{
        updateGrid(id){
            this.loadingGrid = true
            console.log("Updating Grid")
            axios.get(`http://localhost:3000/ToolData?id=` + id)
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
    created(){
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
