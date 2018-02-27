<template>

  <div>
  <div v-if="object && object.length">
    <div v-for="object of object">
      <p><strong>{{object.url}}</strong></p>
      <p>{{object.id}}</p>
    </div>
  </div>


  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
  /*eslint-disable*/
  import axios from 'axios'
  export default {
    data() {
      return {
        object: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created() {
      axios.get(`http://localhost:3000/object`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.object = response.data
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
