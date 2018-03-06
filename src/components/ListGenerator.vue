<template>
  <div>
        <draggable
          :options="{animation:150,group:{name: 'grid', pull: 'clone', put:false},multipleDropzonesItemsDraggingEnabled: true}">
        <div draggable="false" v-for="items in thisProp" v-bind:key="items.id" @dblclick="showModal=true"
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
        </div>
        </draggable>
      </div>

</template>

<script>
  import draggable from 'vuedraggable'
  import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'


  export default {
    name: 'list-generator',
    data() {
      return {showModal: false}
    },
    components: {
      draggable,
      Bmodal

    },
    props: [
      "thisProp"
    ]
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

  .icon {
    height: 120px;
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .item {
    /*border: 2px solid black;*/
    height: 156.55px;
    text-align: center;
    margin: 2px;
    min-width: 233.78px;
    margin: 20px 10px 10px 10px;
    background-color: #f0f3f5;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
    color: black;
  }

  .item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .drop {
    height: 50px;
    width: 80%;
  }

  .drop option {
    padding: 50px;
  }

  .sortable-chosen, sortable-chosen.sortable-ghost {
    opacity: 1;
  }

  .sortable-ghost {
    background-color: #dadada;
    opacity: 1;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    left: 35%;
    top: 10%;
    background-color: rgb(255, 255, 255);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width: 40%;
    height: auto;
    border: 1px solid lightgray;
  }

  .close {
    float: right;
    border: none;
    color: darkred;
    background-color: white;
    font-size: 35px;
    display: block;
  }

  .modal-content {
    height: 100%;
  }

  .modal-body {
    padding: 20px;
  }

</style>
