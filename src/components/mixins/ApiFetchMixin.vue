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
      getfromDB(dbName) {
        axios.get('http://localhost:3000/' + dbName)
          .then(response => {
            // JSON responses are automatically parsed.
            return response.data

          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    }
  }

</script>

<style scoped>

</style>
