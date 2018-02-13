<template>
  <ul draggable="false" class="list">
    <draggable :options="{animation:50,group:{name: 'grid', pull: 'clone', put:false},multipleDropzonesItemsDraggingEnabled: true}">
    <li v-bind:key="items.id" v-for="items in object">
      <div ondblclick="alert('Hello person')" class = "item" >
      {{items.name}}
      <br><img class="icon" :src="items.icon"/>
    </div>
    </li>
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
          id: '12',
          icon : 'https://cdn0.iconfinder.com/data/icons/infographic-bar-vol-9/512/1-512.png'

        },
        {
          name: 'Tool2',
          url: 'http://www.google.com',
          id: '2',
          icon : 'http://icon-park.com/imagefiles/mail_vector_icon_light_blue.png'

        },
        {
          name: 'Tool3',
          url: 'http://www.google.com',
          id: '3',
          icon: 'http://www.pvhc.net/img114/ttxcvpkwqouwoklwwvqs.png'
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
  color:black;
  padding:0;
  display:inline;
  animation: 400ms;
  min-height: 100%;

}

  link{
    text-decoration: none;
  }
  .icon{
    height: 120px;
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
    /*box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/
  }
  .item{
    /*border: 2px solid black;*/
    -webkit-user-drag: none;
    height: auto;
    text-align:center;
    margin:2px;
    min-width: 200px;
    margin: 20px 10px 10px 10px;
    background-color: #f0f3f5;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
  }
  .item:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
  opacity: 1;
}
</style>
