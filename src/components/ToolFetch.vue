<template>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "tool-fetch",
      data(){
          return{
            toolData: {},
            response: ""
          }
      },

      methods:{
        getTool(){
          console.log("yo");
          axios.get(`http://localhost:3000/tool`)
            .then(response => {
              this.toolData = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
          // console.log("we got there")
          // console.log(Vue.http.get('localhost:3000/tool').then(this.response))


        },
      }
    }
</script>

<style scoped>

</style>
