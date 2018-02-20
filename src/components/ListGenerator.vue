<template>
  <div>
    <select class="drop">
      <option class="option" v-for="items in object">
        {{items.name}}
      </option>
    </select>
  <ul draggable="false" class="list">
    <draggable :move="true" :list="list" :options="{animation:150,group:{name: 'grid', pull: 'clone', put:false},multipleDropzonesItemsDraggingEnabled: true}" >

    <!--li v-bind:key="items.id" v-for="items in object"-->
      <div draggable="false" v-for="items in object" v-bind:key="items.id" ondblclick="alert('Hello person')" class = "item" >
      {{items.name}}
      <br><img class="icon" :src="items.icon"/>

        <!--button onclick="remove()">x</button-->
    </div>
    <!--/li-->
    </draggable>
  </ul>
    <!--<draggable :options="{group:'grid'}">
      <div class="item" v-for="items in object">{{items.name}}</div>

    </draggable>-->
  </div>

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
          id: '1',
          icon: 'https://cdn0.iconfinder.com/data/icons/infographic-bar-vol-9/512/1-512.png',

        },
        {
          name: 'Mail',
          url: 'http://www.google.com',
          id: '2',
          icon: 'http://icon-park.com/imagefiles/mail_vector_icon_light_blue.png',
          mail: 'olve.husby@gmail.com',
          date: '',

        },
        {
          name: 'Graphbloop',
          url: 'http://www.google.com',
          id: '3',
          icon: 'http://www.pvhc.net/img114/ttxcvpkwqouwoklwwvqs.png'
        },
        {
          name: 'Conditional',
          url: 'http://www.google.com',
          id: '4',
          icon: 'https://julien.danjou.info/media/images/blog/2015/fork_icon.png'
        },
        {
          name: 'Status',
          url: 'http://www.google.com',
          id: '5',
          icon: 'http://www.pvhc.net/img130/cxbjkmnziliplxfojxdc.jpg'
        },
        {
          name: 'Tool6',
          url: 'http://www.google.coms',
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
  }
  .item{
    /*border: 2px solid black;*/
    height: 156.55px;
    text-align:center;
    margin:2px;
    min-width: 233.78px;
    margin: 20px 10px 10px 10px;
    background-color: #f0f3f5;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
  }
  .item:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .drop{
    height: 50px;
    width: 80%;
  }
  .drop option{
    padding: 50px;
  }

.sortable-chosen, sortable-chosen.sortable-ghost {
  opacity: 1;
}
.sortable-ghost {
  background-color: #dadada;
  opacity: 1;
}
</style>
