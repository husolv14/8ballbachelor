<template>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ApiWidget",
    // Fetches posts when the component is created.
    created() {
      // axios.get(`http://localhost:3000/widgetData`)
      //   .then(response => {
      //     // JSON responses are automatically parsed.
      //     this.widgetData = response.data
      //
      //   })
      //   .catch(e => {
      //     this.errors.push(e)
      //   })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    },
    methods: {

    },
    computed:{

    },
    asyncData: {
      async getWidgetData() {
        console.log("getWidgetData started! ")
        try {
          const response = await axios.get(`http://localhost:3000/WidgetData`)
          console.log(response.data)
           return response

        }catch (e){

        }

        // await axios.get(`http://localhost:3000/WidgetData`)
        //   .then(response => {
        //     console.log("THIS IS RESPONSE : " + response.data)
        //     return response.data
        //   })
        //   .catch(e => {
        //     return this.errors.push(e)
        //   })
        // async / await version (created() becomes async created())
        //
        // try {
        //   const response = await axios.get('http://localhost:3000/WidgetData')
        //   this.WidgetData = response.data
        // } catch (e) {
        //   this.errors.push(e)
        // }

      }
    }
  }
</script>
