<template>
  <div class="mainWrapper">
    <sidebar WidgetData="WidgetData">

      <div v-for="item in WidgetData">
        <h1>Hello</h1>
        <Widget :widgetItem="item"></Widget>
      </div>
    </sidebar>
    <grid/>
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
        WidgetData:{}
      }
    },
    components: {
      Sidebar,
      Grid,
      ApiFetch
      //Modal
    },
    async created(){
      axios.get(`http://localhost:3000/widgetData`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.widgetData = response.data

        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    asyncData: {
      async getWidgetData() {
        console.log("getWidgetData started! ")
        try {
          const response = await axios.get(`http://localhost:3000/WidgetData`)
          console.log(response.data)
          return this.WidgetData = response.data

        } catch (e) {

        }
      }
    }
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
