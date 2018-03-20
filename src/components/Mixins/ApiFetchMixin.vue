<template>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "api-fetch-mixin",
    methods: {
      getFullDB() {
        axios.get('http://localhost:3000/db')
          .then(response => {
            // JSON responses are automatically parsed.
            return response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      getFromDB(dbName) {
        axios.get('http://localhost:3000/' + dbName)
          .then(response => {
            // JSON responses are automatically parsed.
            return response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    },
    data() {
      return {
        widget: {},
        widgetList: []
      }
    },
    methods: {
      storeWidgetData() {
        this.widgetList = this.getFromDB('widgetData')
        console.log('GET FROM DB : ' + this.WidgetList)
      },
      getWidgetItem(i) {
        return this.widgetList[i]
        console.log('Returned ' + this.widgetList[i])
      }
    }
  }

</script>

<style scoped>

</style>
