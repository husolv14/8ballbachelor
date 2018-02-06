<template>
  <ul class="list">

    <li v-for="items in object"><h3>{{items.name}}</h3></li>
  </ul>
</template>

<script>
export default {
  name: 'list-generator',
  data () {
    return {
      object: [
        {
          name: 'Tool1',
          url: 'http://www.google.no',
          id: '1'
        },
        {
          name: 'Tool2',
          url: 'http://www.google.com',
          id: '2'
        },
        {
          name: 'Tool3',
          url: 'http://www.google.com',
          id: '3'
        },
        {
          name: 'Tool4',
          url: 'http://www.google.com',
          id: '4'
        },
        {
          name: 'Tool5',
          url: 'http://www.google.com',
          id: '5'
        },
        {
          name: 'Tool6',
          url: 'http://www.google.com',
          id: '6'
        },
        {
          name: 'Tool7',
          url: 'http://www.google.com',
          id: '7'
        },
        {
          url: 'http://www.google.com',
          id: '8'
        }
      ]
    }
  }
}

</script>

<style scoped>
.list{
  list-style: none;
  text-align:center;
  text-decoration:none;
  color:white;
  padding:0;
}
  link{
    text-decoration: none;
  }
  h3{
    border: 2px solid black;
    height: 50px;
    text-align:center;
    margin:2px;
  }
</style>
