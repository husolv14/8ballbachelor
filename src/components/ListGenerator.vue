<template>
  <div>

    <select class="drop">
      <option class="option" v-for="items in widgetData">
        {{items.name}}
      </option>
    </select>
    <ul draggable="false" class="list">
      <!--draggable
        :options="{animation:150,group:{name: 'grid', pull: 'clone', put:false},multipleDropzonesItemsDraggingEnabled: true}"-->
        <Widget></Widget>
<!--
        li v-bind:key="items.id" v-for="items in object"
        <div draggable="false" v-for="items in widgetData" v-bind:key="items.id" @dblclick="showModal=true"
             @dbclick="showModal= true" class="item">
          {{items.name}}
          <br><img class="icon" :src="items.icon"/>
          <div v-if="showModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <button type="button" class="close" @click="showModal=false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">{{items.name}}</h4>
                        <p>{{items.description}}</p>
                        <input id="check1" v-if="items.check" type="checkbox" value="Hallo" checked>
                        <input id="check2" v-else type="checkbox" value="Hallo">
                        <label v-if="items.check" for="check1">True</label>
                        <label v-else for="check2">False</label>


                      </div>
                      <div class="modal-body">
                        <select>
                          <option>{{items.mail}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          button onclick="remove()">x</button
        </div>
        /li-->
      <!--draggable-->
    </ul>
    <!--<draggable :options="{group:'grid'}">
      <div class="item" v-for="items in object">{{items.name}}</div>

    </draggable>-->
  </div>

</template>

<script>
  import draggable from 'vuedraggable'
  import axios from 'axios'
  import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'
  import Widget from './Widget'

  export default {
    name: 'list-generator',
    data() {
      return {
        widgetData: [],
        errors: [],
        showModal: ""
      }
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
    },
    components: {
      draggable,
      Bmodal,
      Widget

    }
  }

</script>


<style scoped>
  ul {
    height: 100%;
  }

  .list {
    list-style: none;
    text-align: center;
    text-decoration: none;
    color: black;
    padding: 0;
    display: inline;
    animation: 400ms;
    min-height: 100%;

  }

  link {
    text-decoration: none;
  }

  /*.icon {
    height: 120px;
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .item {
    !*border: 2px solid black;*!
    height: 156.55px;
    text-align: center;
    margin: 2px;
    min-width: 233.78px;
    margin: 20px 10px 10px 10px;
    background-color: #f0f3f5;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
  }

  .item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }*/

  .drop {
    height: 50px;
    width: 80%;
  }

  .drop option {
    padding: 50px;
  }

  /*.sortable-chosen, sortable-chosen.sortable-ghost {
    opacity: 1;
  }

  .sortable-ghost {
    background-color: #dadada;
    opacity: 1;
  }
*/

</style>
