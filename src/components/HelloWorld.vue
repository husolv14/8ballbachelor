
<template>
  <!--Dette er template, her skal all html ligge-->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  //javascript i komponenten
export default {
  //navnet på componenten
  name: 'HelloWorld',
  data () {
    return {
      //data i komponent
      msg: 'Gutta Boyz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
