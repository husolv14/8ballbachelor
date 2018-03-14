<template>
  <div>
    <div v-for="item in widgetData">
      <Widget :widgetItem = "item"></Widget>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Widget from './Widget'

  export default {
    components: {Widget},
    name: "ApiWidget",
    data() {
      return {
        widgetData: [],
        errors: [],
        userData: []
      }
    },
    component: {
      Widget
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

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>
