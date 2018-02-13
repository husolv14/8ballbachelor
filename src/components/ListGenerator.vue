<template>
  <ul draggable="false" class="list">
    <draggable :options="{animation:50,group:'grid',multipleDropzonesItemsDraggingEnabled: true, clone: clone, pull: 'clone'}">
    <li draggable="false" v-bind:key="items.id" v-for="items in object"><div ondblclick="alert('Hello person')" draggable="false" class = "item" >{{items.name}}</div></li>
    </draggable>
  </ul>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'list-generator',
  data () {
    return {
      object: [
        {
          name: 'MagicFixer',
          url: 'http://www.google.no',
          id: '12'
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
          name: 'Tool8',
          url: 'http://www.google.com',
          id: '8'
        }
      ]
    }
  },
  components: {
    draggable
  }
}

</script>

<style scoped>
 ul{
   height: 100%;
 }
.list{
  list-style: none;
  text-align:center;
  text-decoration:none;
  color:white;
  padding:0;
  display:inline;
  animation: 400ms;
  min-height: 100%;

}

  link{
    text-decoration: none;
  }
  .item{
    border: 2px solid black;
    height: 50px;
    text-align:center;
    margin:2px;
    height:100px;
    min-width: 200px;
  }
  .draggable {
    animation-delay: 4s;
  }
.sortable-chosen, sortable-chosen.sortable-ghost {
  opacity: 0;
  transition-duration: 4s;
}
.sortable-ghost {
  background-color: #dadada;
  opacity: 0;
}
</style>
