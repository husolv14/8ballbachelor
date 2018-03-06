<template>
  <ListGenerator :thisProp="widgetData"></ListGenerator>
</template>

<script>
  import axios from 'axios'
  import draggable from 'vuedraggable'
  import ListGenerator from './ListGenerator'
    export default {
        name: "widget",
      data() {
        return {
          widgetData: [],
          errors: [],
          showModal: ""
        }
      },

      // Fetches posts when the component is created.
      created() {
        axios.get(`http://localhost:3000/widgetData`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.widgetData = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      components:{
          draggable,
          ListGenerator
      }
    }
</script>

<style scoped>
</style>
